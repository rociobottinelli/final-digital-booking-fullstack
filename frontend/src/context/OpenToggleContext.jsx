import { createContext, useState } from "react";

const OpenToggleContext = createContext();

const initialOpenToggle = false;

const OpenToggleProvider = ({ children }) => {
  const [openNav, setOpenNav] = useState(initialOpenToggle);

  const handleToggle = () => {
    setOpenNav((current) => !current);
  };

  const data = { openNav, handleToggle };

  return (
    <OpenToggleContext.Provider value={data}>
      {children}
    </OpenToggleContext.Provider>
  );
};

export { OpenToggleProvider };

export default OpenToggleContext;
