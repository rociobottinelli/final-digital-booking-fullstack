import React from "react";
import Search from "../components/searchBar/Search";
import Categories from "./Categories";
import ListImageCard from "./ListImageCard";
import ProductsByPagination from "./productsByPagination/ProductsByPagination";
import CleanerButton from "./CleanerButton";
import ActitivitiesBlockHome from "./activities/ActitivitiesBlockHome";
import InfoFooter from "./activities/InfoFooter";

const Main = () => {
  const link = "/"
  return (
    <>
      <Search />
      <Categories />
      <CleanerButton/>
      <ListImageCard />
      <ProductsByPagination />
      <ActitivitiesBlockHome details={link}/>
      <InfoFooter/>
    </>
  );
};

export default Main;
