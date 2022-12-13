import Swal from "sweetalert2";
import monkeyCrying from "../assets/images/monkey-crying.png";
import monkeyBored from "../assets/images/monkey-bored.png";
import monkeyHappy from "../assets/images/monkey-happy.jpg";
import monkeyWorried from "../assets/images/monkey-worried.png";
import "../styles/sweetAlert.css";

const SweetAlert = {
  messageCloseSession: (title, callback) => {
    Swal.fire({
      title,
      imageUrl: `${monkeyWorried}`,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Monkey happy",
      width: "300px",
      showCancelButton: true,
      iconColor: "#1dbeb4",
      confirmButtonColor: "#717599",
      cancelButtonColor: "#e8514f",
      confirmButtonText: "Sí, cerrar sesión!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
        Swal.fire({
          title: "Sesión cerrada!",
          text: "La sesión se cerró satisfactoriamente!",
          imageUrl: `${monkeyHappy}`,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Monkey happy",
          width: "300px",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  },
  messageLoginOk: (title, callback) => {
    Swal.fire({
      title,
      imageUrl: `${monkeyBored}`,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Monkey bored",
      width: "300px",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {      
        callback();
        Swal.fire({          
          imageUrl: `${monkeyHappy}`,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Monkey happy",
          width: "300px",
          timer: 2000,
          title: "Sesión iniciada!",
          text: "La sesión se inició satisfactoriamente!",
          showConfirmButton: false,
        });      
    });
  },
  messageError: (title, text) => {
    Swal.fire({
      title,
      text,
      imageUrl: `${monkeyCrying}`,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Monkey crying",
      width: "300px",
      confirmButtonColor: "#717599",
      confirmButtonText: "Aceptar",
      toast: true,
    });
  },
  messageWxpirationJwt: (title, text, callback) => {
    Swal.fire({
      title,
      text,
      imageUrl: `${monkeyCrying}`,
      imageWidth: 100,
      imageHeight: 100,
      imageAlt: "Monkey crying",
      width: "300px",
      confirmButtonColor: "#717599",
      confirmButtonText: "Reiniciar sesión",
      toast: true,
    }).then(() => {      
      callback();    
  });
  },
};

export default SweetAlert;
