import { createChatBotMessage } from "react-chatbot-kit";
import MonkeyBotAvatar from "../MonkeyBotAvatar";
import UserAvatar from "../UserAvatar";
import "../../../styles/chatBot/monkeyBotHeader.css";
import ChatThemes from "../ChatThemes";
import LinkList from "../LinkList";
import ReservationProcess from "../ReservationProcess";
import ContactList from "../ContactList";
import NewAdmin from "../NewAdmin";

const botName = "Monkey Bot";

const config = {
  initialMessages: [
    createChatBotMessage(`Hola! Soy ${botName}!`),
    createChatBotMessage("Decime en qué te puedo ayudar!", {
      withAvatar: true,
      widget: "chatThemes",
    }),
  ],
  botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#1DBEB4",
    },
    chatButton: {
      backgroundColor: "#383B58",
    },
  },
  customComponents: {
    header: () => <div className="monkeyBotHeader">{botName} - estoy para ayudarte</div>,
    botAvatar: (props) => <MonkeyBotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "chatThemes",
      widgetFunc: (props) => <ChatThemes {...props} />,
    },
    {
      widgetName: "welcomeMessage",
      widgetFunc: (props) => <ChatThemes {...props} />,
    },
    {
      widgetName: "backToMenu",
      widgetFunc: (props) => <ChatThemes {...props} />,
    },
    {
      widgetName: "error",
      widgetFunc: (props) => <ChatThemes {...props} />,
    },
    {
      widgetName: "signUp",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Crear una cuenta",
            url: "/crear-cuenta",
            id: "A1",
          },
        ],
      },
    },
    {
      widgetName: "login",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Iniciar sesión",
            url: "/iniciar-sesion",
            id: "B1",
          },
        ],
      },
    },
    {
      widgetName: "reservation",
      widgetFunc: (props) => <ReservationProcess {...props} />,
    },
    {
      widgetName: "profile",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Ver mis reservas",
            url: "/perfil",
            id: "C1",
          },
        ],
      },
    },
    {
      widgetName: "favorites",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Ver mis favoritos",
            url: "/perfil",
            id: "D1",
          },
        ],
      },
    },
    {
      widgetName: "admin",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Ver mis hospedajes como administrador",
            url: "/administracion/productos",
            id: "E1",
          },
        ],
      },
    },
    {
      widgetName: "newAdmin",
      widgetFunc: (props) => <NewAdmin {...props} />,
    },
    {
      widgetName: "contact",
      widgetFunc: (props) => <ContactList {...props} />,
      props: {
        options: [
          {
            text: "Correo",
            url: "mailto:help.digitalbooking@gmail.com?subject=Consulta - Digital Booking",
            id: "F1",
          },
          {
            text: "Instagram",
            url: "https://www.instagram.com/digitalbooking_/",
            id: "F2",
          },
          {
            text: "Facebook",
            url: "https://www.facebook.com/Digital-Booking-108231588607352/",
            id: "F3",
          },
          {
            text: "Twitter",
            url: "https://twitter.com/booking_digital",
            id: "F4",
          },
        ],
      },
    },
  ],
};

export default config;
