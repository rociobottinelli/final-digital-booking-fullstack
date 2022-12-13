import React from "react";
import "../../styles/chatBot/linkList.css";

const ContactList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-list-item-url">
        {link.text}
      </a>
    </li>
  ));

  return (
    <>
      <ul className="listContainer">{linkMarkup}</ul>
      <p className="botMenu-p">Para ver nuevamente las opciones, ingresá la palabra 'opciones'</p>
    </>
  );
};

export default ContactList;
