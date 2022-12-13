import { createContext, useState, useContext } from "react";
import FilterContext from "../context/FilterContext";

const OpenCarouselContext = createContext();

const initialOpenCarousel = false;

const OpenCarouselProvider = ({ children }) => {
  const { setanimationSuccessful } = useContext(FilterContext);

  const [openCarousel, setOpenCarousel] = useState(initialOpenCarousel);

  const handleCarousel = () => {
    setOpenCarousel((current) => !current);
    setanimationSuccessful(false);
  };

  const handleClose = () => setOpenCarousel(false);

  const data = { openCarousel, handleCarousel, handleClose };

  return (
    <OpenCarouselContext.Provider value={data}>
      {children}
    </OpenCarouselContext.Provider>
  );
};

export { OpenCarouselProvider };

export default OpenCarouselContext;
