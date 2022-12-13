import { createContext, useState } from "react";

const IsLoggedContext = createContext();

const initialLoged = localStorage.getItem("login") || false;

const IsLoggedProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState(initialLoged);
  const [flag, setFlag] = useState(false);

  const data = { isLoged, setIsLoged, flag, setFlag };

  return <IsLoggedContext.Provider value={data}>{children}</IsLoggedContext.Provider>;
};

export { IsLoggedProvider };

export default IsLoggedContext;
