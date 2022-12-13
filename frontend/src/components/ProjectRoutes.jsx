import React from "react";
import { Routes, Route } from "react-router-dom";
import { FilterCityProvider } from "../context/FilterByCityContext";
import { FilterProvider } from "../context/FilterContext";
import { IsLoggedProvider } from "../context/isLogedContext";
import { OpenCarouselProvider } from "../context/OpenCarouselContext";
import { OpenToggleProvider } from "../context/OpenToggleContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Reservation from "../pages/Reservation";
import SignUp from "../pages/SignUp";
import Error404 from "../helpers/Error404";
import ScrollToTop from "./ScrollToTop";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import ActivitiesPlace from "./activities/ActivitiesPlace";
import Activities from "../pages/Activities";
import EmailVerify from "../pages/EmailVerify";
import Layout from "../layout/Layout";
import HostingCreation from "../pages/HostingCreation"
import ProductsAdmin from "../pages/ProductsAdmin";
import HostingUpdate from "../pages/HostingUpdate";
import ValueAccommodation from "./profile/ValueAccommodation";

const ProjectRoutes = () => {
  return (
    <OpenToggleProvider>
      <IsLoggedProvider>
        <FilterCityProvider>
          <FilterProvider>
            <OpenCarouselProvider>
              <ScrollToTop>
                <Layout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/iniciar-sesion" element={<Login />} />
                    <Route path="/crear-cuenta" element={<SignUp />} />
                    <Route path="/perfil" element={<Profile />} />
                    <Route path="/perfil/valorar/:id/:idres/:location" element={<ValueAccommodation />} />
                    <Route path="/alojamientos/:id/:location" element={<Products />} />
                    <Route path="/usuarios/verify/:code" element={<EmailVerify />} />
                    <Route path="/alojamientos/:id/:location/reservar" element={<PrivateRoute />}>
                      <Route
                        path="/alojamientos/:id/:location/reservar"
                        element={<Reservation />}
                      />
                    </Route>
                    <Route path="/alojamientos/:id/:location/reservar" element={<Reservation />} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/lugares" element={<Activities />} />
                    <Route path="/lugares/:id/:nombre" element={<ActivitiesPlace />} />
                    <Route path="/administracion/productos/crear" element={<HostingCreation />} />
                    <Route path="/administracion/productos" element={<ProductsAdmin />} />
                    <Route path="/administracion/productos/:id/editar" element={<HostingUpdate />} />

                  </Routes>
                </Layout>
              </ScrollToTop>
            </OpenCarouselProvider>
          </FilterProvider>
        </FilterCityProvider>
      </IsLoggedProvider>
    </OpenToggleProvider>
  );
};

export default ProjectRoutes;
