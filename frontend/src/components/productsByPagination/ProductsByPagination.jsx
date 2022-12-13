import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "../../styles/productsByPagination/productsByPagination.css";
import Loader from "../../helpers/Loader";
import { baseUrl, getProductsByPage } from "../../constants/urls";
import IsLoggedContext from "../../context/isLogedContext";
import FilterContext from "../../context/FilterContext";
import ProductCard from "../ProductCard";
import PaginationBottons from "./PaginationBottons";

const ProductsByPagination = () => {
  const [images, setImages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [productQuantity, setProductQuantity] = useState(0);
  const { isLoged } = useContext(IsLoggedContext);
  const { filter } = useContext(FilterContext);

  const userLog = localStorage.getItem("usuario") || "";
  const name = localStorage.getItem("userName");

  useEffect(() => {
    axios
      .get(baseUrl + getProductsByPage)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  const filteredProducts = () =>
    images.slice(productQuantity, productQuantity + 6);

  const nextPageCount = () => {
    if (productQuantity <= images.length) {
      setProductQuantity((prevState) => prevState + 6);
      setPageCount((prevState) => prevState + 1);
    }
  };

  const prevPageCount = () => {
    if (productQuantity > 0) {
      setProductQuantity((prevState) => prevState - 6);
      setPageCount((prevState) => prevState - 1);
    }
  };

  const imagesLength = images.length;

  if (filter === "error") {
    return <div></div>;
  } else if (images.length === 0) {
    return (
      <>
        <div className="productsPaginationContainer">
          {userLog ? (
            <h2>Nuestras recomendaciones para vos {name}</h2>
          ) : (
            <h2>Recomendaciones</h2>
          )}
        </div>
        <Loader />;
      </>
    );
  } else {
    return (
      <>
        <div className="productsPaginationContainer">
          <h2>
            {isLoged
              ? `Nuestras recomendaciones para vos ${name}`
              : "Recomendaciones"}
          </h2>
          {filteredProducts().map((host) => {
            return (
              host.imagen.find((img) => img.title === "principal") && (
                <ProductCard key={host.id} data={host} />
              )
            );
          })}
        </div>
        <PaginationBottons
          prevPageCount={prevPageCount}
          nextPageCount={nextPageCount}
          pageCount={pageCount}
          imagesLength={imagesLength}
        />
      </>
    );
  }
};
export default ProductsByPagination;
