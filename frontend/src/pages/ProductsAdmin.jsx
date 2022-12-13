import React, { useEffect } from "react";
import UserProducts from "../components/administration/profile/UserProducts";
import ProductsHeaderTop from "../components/products/ProductsHeaderTop";


const ProductsAdmin = () => {

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Mis hospedajes";

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
    <ProductsHeaderTop linkProps={"/"} />
      <UserProducts />
    </>
  );
};

export default ProductsAdmin;
