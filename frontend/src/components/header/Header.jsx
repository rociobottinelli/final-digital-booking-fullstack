import React, { useContext } from "react";
import "../../styles/header/header.css";
import "../../styles/customProperties.css";
import NavBar from "./NavBar";
import Logo from "./Logo";
import OpenCarouselContext from "../../context/OpenCarouselContext";
import FilterByCityContext from "../../context/FilterByCityContext";
import FilterContext from "../../context/FilterContext";
import IsLoggedContext from "../../context/isLogedContext";

const Header = () => {
  const { handleClose } = useContext(OpenCarouselContext);
  const { setFilterCity, setPlaceholder, setFilterCity2 } =
    useContext(FilterByCityContext);
  const {
    setFilter,
    setFilterDateSearch,
    setplaceholderCalendar,
    setFilterDate,
    setCheckInDate,
    setCheckOutDate,
    setValueCalendar,
    setSearchFilter,
    setSearchByDate,
    setCleanerButtonClass,
    setname,
    setnumber,
    setexpiry,
    setcvc,
    setPaymentSuccessful,
    setclassName,
  } = useContext(FilterContext);
  const { setFlag } = useContext(IsLoggedContext);

  const onClickButton = () => {
    setPlaceholder("¿A dónde vamos?");
    setFilterCity("");
    handleClose();
    setFilter("");
    setFlag(false);
    setFilterCity2([]);
    setCheckOutDate("");
    setCheckInDate("");
    setValueCalendar("Check In - Check Out");
    setplaceholderCalendar("Check In - Check Out");
    setFilterDateSearch([]);
    setFilterDate([]);
    setSearchFilter(false);
    setSearchByDate([]);
    setCleanerButtonClass("off");
    setname("DIGITAL BOOKING");
    setnumber("");
    setexpiry("");
    setcvc("");
    setPaymentSuccessful(false);
    setclassName("none");
  };

  return (
    <header onClick={() => onClickButton()}>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
