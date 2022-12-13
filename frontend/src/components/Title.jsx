import React from "react";
import "../styles/title.css"

function Title({title}) {
  return (
    <div className="title__component">
      <h2 className="productsfeatures__title">{title}</h2>
      <div className="productsfeatures__line"></div>
    </div>
  );
}

export default Title;
