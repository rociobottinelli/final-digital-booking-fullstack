import { createContext, useState } from "react";

const FilterContext = createContext();

const initialFilter = "";

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState(initialFilter);
  const [filterDate, setFilterDate] = useState([]);
  const [filterDateSearch, setFilterDateSearch] = useState([]);
  const [placeholderCalendar, setplaceholderCalendar] = useState(
    "Check in - Check out"
  );
  const [valueCalendar, setValueCalendar] = useState("Check In - Check Out");
  const [searchByDate, setSearchByDate] = useState([]);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [searchFilter, setSearchFilter] = useState(false);
  const [animationSuccessful, setanimationSuccessful] = useState(false);
  const [favoritos, setFavoritos] = useState([]);
  const [cleanerButtonClass, setCleanerButtonClass] = useState("off");
  const [containsDisabledDates, setContainsDisabledDates] = useState(false);
  const [linkToBack, setLinkToBack] = useState("/");

  const [className, setclassName] = useState("none");
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const [cvc, setcvc] = useState("");
  const [expiry, setexpiry] = useState("");
  const [name, setname] = useState("DIGITAL BOOKING");
  const [number, setnumber] = useState("");
  const [clearInput, setClearInput] = useState(false);

  const handleFilter = () => {
    setFilter((current) => !current);
  };

  const data = {
    filter,
    handleFilter,
    setFilter,
    filterDate,
    setFilterDate,
    filterDateSearch,
    setFilterDateSearch,
    placeholderCalendar,
    setplaceholderCalendar,
    valueCalendar,
    setValueCalendar,
    searchByDate,
    setSearchByDate,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    searchFilter,
    setSearchFilter,
    animationSuccessful,
    setanimationSuccessful,
    favoritos,
    setFavoritos,
    containsDisabledDates,
    setContainsDisabledDates,
    cleanerButtonClass,
    setCleanerButtonClass,
    linkToBack,
    setLinkToBack,
    className,
    setclassName,
    paymentSuccessful,
    setPaymentSuccessful,
    cvc,
    setcvc,
    expiry,
    setexpiry,
    name,
    setname,
    number,
    setnumber,
    clearInput,
    setClearInput,
  };

  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
};

export { FilterProvider };

export default FilterContext;
