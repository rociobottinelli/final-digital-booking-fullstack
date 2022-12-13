import React, { useState, useContext } from "react";
import "../../styles/profile/valueAccomodation.css";
import { useParams } from "react-router-dom";
import { imgStar } from "../../styleAux/fontAwesoneIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import OperationSuccessful from "../../pages/OperationSuccessful";
import OpenCarouselContext from "../../context/OpenCarouselContext";
import { Link } from "react-router-dom";
import { baseUrl } from "../../constants/urls";
import axios from "axios";
import SweetAlert from "../../helpers/SweetAlert";
import { useNavigate } from "react-router-dom";

function ValueAccommodation() {
  const imgStarRegular = <FontAwesomeIcon className="fa-star" icon={faStar} />;
  let { id, location, idres } = useParams();
  const idAccomodation = id;
  const userId = localStorage.getItem("userId");
  const nameAccomodation = location;
  const [value, setvalue] = useState(1);
  const { openCarousel, handleCarousel } = useContext(OpenCarouselContext);
  const [comments, setcomments] = useState("");
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("userToken"));
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const dataPost = {
    puntuacion: value,
    productos: { id: idAccomodation },
    usuario: { id: userId },
    reserva: { id: idres },
    comentarios: comments,
  };
  const postValue = async () => {
    try {
      await axios
        .post(baseUrl + "puntuaciones", dataPost, {
          headers: headers,
        })
        .then(handleCarousel);
    } catch (error) {
      console.log(error);
      const status = error.response.status;
      if (status === 401) {
        SweetAlert.messageWxpirationJwt(
          "Ooops! Ocurrió un error!",
          "Tu sesión ha caducado. Por favor volvé a iniciar sesión para realizar la reserva",
          () => {
            navigate("/iniciar-sesion", { replace: true });
          }
        );
      } else {
        SweetAlert.messageError(
          "Ooops! Ocurrió un error!",
          "Volvé a intentarlo más tarde"
        );
      }
    }
  };

  const handleChange = (e) => {
    setcomments(e.target.value);
  };

  return (
    <div className="valueAccomodation">
      <div className={openCarousel ? "successfull__on" : "successfull__none"}>
        <OperationSuccessful
          message="Valoración Exitosa"
          url="/perfil"
          messageButton="Volver al perfil"
        />
      </div>
      <div className="valueAccomodation__container">
        <div className="valueAccomodation__title">
          Valora tu experiencia en {nameAccomodation}
        </div>
        <div className="valueAccomodation__stars">
          <span onClick={() => setvalue(1)}>
            {value < 1 ? imgStarRegular : imgStar}
          </span>
          <span onClick={() => setvalue(2)}>
            {value < 2 ? imgStarRegular : imgStar}
          </span>
          <span onClick={() => setvalue(3)}>
            {value < 3 ? imgStarRegular : imgStar}
          </span>
          <span onClick={() => setvalue(4)}>
            {value < 4 ? imgStarRegular : imgStar}
          </span>
          <span onClick={() => setvalue(5)}>
            {value !== 5 ? imgStarRegular : imgStar}
          </span>
        </div>
        <div id="valueAccomodation__additionals">
          <label className="valueAccomodatio__form__title" htmlFor="comments">
            Comentarios adicionales
          </label>
          <textarea
            maxLength="200"
            id="comments"
            name="comments"
            onChange={handleChange}
            placeholder="Si desea puede agregar comentarios en este campo para completar su valoracion."
          ></textarea>
        </div>
        <div className="valueAccomodation__button">
          <button onClick={postValue}>Enviar Valoracion</button>
          <Link to={"/perfil"}>
            <button>Volver al perfil</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ValueAccommodation;
