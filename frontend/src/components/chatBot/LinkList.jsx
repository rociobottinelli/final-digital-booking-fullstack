import React from "react";
import { Link } from "react-router-dom";
import "../../styles/chatBot/linkList.css";

const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <Link to={link.url} className="link-list-item-url">
        {link.text}
      </Link>
    </li>
  ));

  return (
    <>
      <ul className="listContainer">{linkMarkup}</ul>
      <p className="botMenu-p">Para ver nuevamente las opciones, ingresá la palabra 'opciones'</p>
    </>
  );
};

export default LinkList;
