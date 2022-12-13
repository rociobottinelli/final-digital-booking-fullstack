import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/administration/profile/userProducts.css";
import ProductCard from "../../ProductCard";
import axios from "axios";
import { baseUrl, getAllProducts } from "../../../constants/urls";
import { useState } from "react";
import { imgEdit, imgCirclePlus } from "../../../styleAux/fontAwesoneIcon";

const UserProducts = () => {
  const idAdmin = parseInt(localStorage.getItem("userId"));
  const [productsAdmin, setProductsAdmin] = useState([]);

  function getAdminProducts() {
    axios
      .get(baseUrl + getAllProducts)
      .then(function (response) {
        const products = response.data;
        setProductsAdmin(products);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  useEffect(() => {
    getAdminProducts();
  }, []);

  function checkId(product) {
    return product.usuario.id === idAdmin;
  }

  const filteredProducts = productsAdmin.filter(checkId);

  function searchButton() {}

  return (
    <>
      <div>
        <div className="mainUserProducts">
          <div className="divNewProduct">
            <p className="newPublic">¿Querés realizar una nueva publicación?</p>
            <Link to={"/administracion/productos/crear"}>
              <button className="btnLoadProduct">
                <span className="plusIcon"> {imgCirclePlus} </span> Cargar
                producto
              </button>
            </Link>
          </div>
          <h3 className="title">Tus publicaciones activas </h3>
          <hr className="line"></hr>
          <div className="cardProducts">
            <div className="adminProductsCards">
              {filteredProducts.length === 0 ? (
                <div className="adminProductsNone">
                  Aún no cargaste ningún alojamiento en nuestra web.
                </div>
              ) : (
                filteredProducts.map((host) => (
                  <div key={host.id} className="productAdminCard">
                    <ProductCard
                      key={host.id}
                      data={host}
                      searchButton={searchButton}
                    />
                    <Link to={`/administracion/productos/${host.id}/editar`}>
                      <button className="btnEditPublic">
                        {" "}
                        <span className="editIcon">{imgEdit}</span>Editar
                        publicación{" "}
                      </button>
                    </Link>
                    <hr className="cardDivider"></hr>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProducts;
