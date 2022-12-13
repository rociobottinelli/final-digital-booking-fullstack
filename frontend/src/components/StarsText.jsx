import React from "react";

function StarsText({data}) {
  return (
    <p>
      {data === 0 && "Sin puntuación"}
      {data > 0 & data < 2 ? "Muy malo" : ""}
      {(data >= 2) & (data < 4) ? "Malo" : ""}
      {(data >= 4) & (data < 6) ? "Regular" : ""}
      {(data >= 6) & (data < 8) ? "Bueno" : ""}
      {(data >= 8) & (data < 10) ? "Muy bueno" : ""}
      {data === 10 ? "Excelente" : ""}
      </p>
  );
}

export default StarsText;
