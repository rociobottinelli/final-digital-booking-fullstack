import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import IsLoggedContext from "../context/isLogedContext";

const PrivateRoute = () => {
  const { isLoged, setFlag } = useContext(IsLoggedContext);

  useEffect(() => {
    if (isLoged) {
      setFlag(false)
    } else {
      setFlag(true)
    }
      
  }, [isLoged, setFlag]);

  return isLoged ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/iniciar-sesion" />      
    </>
  );
};

export default PrivateRoute;
