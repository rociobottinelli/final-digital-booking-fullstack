import React from "react";
import ChatBot from "../components/chatBot/ChatBot";
import Footer from "../components/Footer";
import Header from "../components/header/Header";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <ChatBot />
      <Footer />
    </>
  );
};

export default Layout;
