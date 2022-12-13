class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleWelcome() {
    const message = this.createChatBotMessage(`En qué te puedo ayudar?`, {
      widget: "welcomeMessage",
    });
    this.updateChatbotState(message);
  }
  handleBackToMenu() {
    const message = this.createChatBotMessage(`En qué te puedo ayudar?`, {
      widget: "backToMenu",
    });
    this.updateChatbotState(message);
  }
  handleSignUp = () => {
    const message = this.createChatBotMessage(
      "Tené en cuenta que debés tener una cuenta de email habilitada. El siguiente link te lleva a crear una cuenta:",
      {
        widget: "signUp",
      }
    );
    this.updateChatbotState(message);
  };
  handleLogin = () => {
    const message = this.createChatBotMessage(
      "Para iniciar sesión tenés que haber validado tu cuenta a través de tu email. El siguiente link te lleva a iniciar sesión:",
      {
        widget: "login",
      }
    );
    this.updateChatbotState(message);
  };
  handleReservation = () => {
    const message = this.createChatBotMessage(
      "Paso a paso para realizar la reserva",
      {
        widget: "reservation",
      }
    );
    this.updateChatbotState(message);
  };
  handleProfile = () => {
    const message = this.createChatBotMessage(
      "Asegurate de tener tu sesión iniciada. El siguiente link te lleva a tus reservas",
      {
        widget: "profile",
      }
    );
    this.updateChatbotState(message);
  };
  handleFavorites = () => {
    const message = this.createChatBotMessage(
      "Asegurate de tener tu sesión iniciada. El siguiente link te lleva a tus favoritos",
      {
        widget: "favorites",
      }
    );
    this.updateChatbotState(message);
  };
  handleAdmin = () => {
    const message = this.createChatBotMessage(
      "Asegurate de tener tu sesión iniciada. El siguiente link te lleva a la página para que puedas administrar tus hospedajes. También podés acceder a la misma a través de la solapa 'Administración' que se encuentra en la parte superior derecha de la pantalla.",
      {
        widget: "admin",
      }
    );
    this.updateChatbotState(message);
  };
  handleNewAdmin = () => {
    const message = this.createChatBotMessage(
      "Para que tu alojamiento pueda ser incluido en nuestra web, ponete en contacto con un asesor y te dirán los pasos a seguir.",
      {
        widget: "newAdmin",
      }
    );
    this.updateChatbotState(message);
  };
  handleContact = () => {
    const message = this.createChatBotMessage(
      "Hablá con un asesor por el medio que más te guste",
      {
        widget: "contact",
      }
    );
    this.updateChatbotState(message);
  };
  handleError = () => {
    const message = this.createChatBotMessage(
      "No pudimos procesar tu consulta. Probá con estas opciones:",
      {
        widget: "error",
      }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
