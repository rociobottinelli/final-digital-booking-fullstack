import errorImg from "../assets/images/mono_error.png";
import "../styles/errorMono.css";

const ErrorMono = () => {
  return (
    <div className="errorMono">
      <img src={errorImg} alt="Imagen mostrada al haber un error"></img>
      <h2>Perdón, algo salió mal</h2>
      <h3>
        Intenta recargar la página. Estamos trabajando para arreglar Booking lo
        antes posible
      </h3>
      <span onClick={() => (window.location.reload())}>Recargar</span>
    </div>
  );
};

export default ErrorMono;
