class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (
      lowerCaseMessage.includes("hello") ||
      lowerCaseMessage.includes("hola") ||
      lowerCaseMessage.includes("buenas") ||
      lowerCaseMessage.includes("holis") ||
      lowerCaseMessage.includes("ayuda") ||
      lowerCaseMessage.includes("help")
    ) {
      this.actionProvider.handleWelcome();
    } else if (
      lowerCaseMessage.includes("volver") ||
      lowerCaseMessage.includes("atrás") ||
      lowerCaseMessage.includes("menu") ||
      lowerCaseMessage.includes("menú") ||
      lowerCaseMessage.includes("menus") ||
      lowerCaseMessage.includes("menús") ||
      lowerCaseMessage.includes("volver al menu") ||
      lowerCaseMessage.includes("opciones") ||
      lowerCaseMessage.includes("volver a opciones")
    ) {
      this.actionProvider.handleBackToMenu();
    } else if (
      lowerCaseMessage.includes("crear cuenta") ||
      lowerCaseMessage.includes("registrarme") ||
      lowerCaseMessage.includes("registrar") ||
      lowerCaseMessage.includes("signup") ||
      lowerCaseMessage.includes("sign up")
    ) {
      this.actionProvider.handleSignUp();
    } else if (
      lowerCaseMessage.includes("iniciar sesión") ||
      lowerCaseMessage.includes("login") ||
      lowerCaseMessage.includes("log in") ||
      lowerCaseMessage.includes("log")
    ) {
      this.actionProvider.handleLogin();
    } else if (lowerCaseMessage.includes("reservar") || lowerCaseMessage.includes("alquilar")) {
      this.actionProvider.handleReservation();
    } else if (
      lowerCaseMessage.includes("profile") ||
      lowerCaseMessage.includes("reservas") ||
      lowerCaseMessage.includes("mis reservas") ||
      lowerCaseMessage.includes("hospedajes reservados") ||
      lowerCaseMessage.includes("reservados")
    ) {
      this.actionProvider.handleProfile();
    } else if (
      lowerCaseMessage.includes("favoritos") ||
      lowerCaseMessage.includes("hospedajes favoritos") ||
      lowerCaseMessage.includes("guardados") ||
      lowerCaseMessage.includes("hospedajes guardados") ||
      lowerCaseMessage.includes("mis favoritos")
    ) {
      this.actionProvider.handleFavorites();
    } else if (
      lowerCaseMessage.includes("propios") ||
      lowerCaseMessage.includes("hospedajes propios") ||
      lowerCaseMessage.includes("creados") ||
      lowerCaseMessage.includes("hospedajes creados") ||
      lowerCaseMessage.includes("mis hospedajes")
    ) {
      this.actionProvider.handleAdmin();
    } else if (
      lowerCaseMessage.includes("administrador") ||
      lowerCaseMessage.includes("ser administrador") ||
      lowerCaseMessage.includes("alquilar mi alojamiento")
    ) {
      this.actionProvider.handleNewAdmin();
    } else if (
      lowerCaseMessage.includes("hablar con alguien") ||
      lowerCaseMessage.includes("hablar") ||
      lowerCaseMessage.includes("contactar asesor") ||
      lowerCaseMessage.includes("contactar") ||
      lowerCaseMessage.includes("asesor") ||
      lowerCaseMessage.includes("representante") ||
      lowerCaseMessage.includes("atenderme")
    ) {
      this.actionProvider.handleContact();
    } else {
      this.actionProvider.handleError();
    }
  }
}

export default MessageParser;
