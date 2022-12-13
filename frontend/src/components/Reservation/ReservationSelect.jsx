import Select from "react-select";
import "../../styles/reservation/reservationSelect.css";

export default function ReservationDetails({handleChange}) {

  const times = [
    "11:00hs.",
    "12:00hs.",
    "13:00hs.",
    "14:00hs.",
    "15:00hs.",
    "16:00hs.",
    "17:00hs.",
    "18:00hs.",
    "19:00hs.",
    "20:00hs.",    
  ];

  const customStyles = {
    control: () => ({
      borderRadius: "7px",
      border: "1px solid rgba(0, 0, 0, .1)",
      boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "space-between",
    }),

    placeholder: () => ({
      fontWeight: "500",
      fontSize: "14px",
      color: "gray",
      padding: "15px 10px",
    }),

    valueContainer: () => ({
      paddingLeft: "5px",
      color: "#333",
      fontSize: "16px",
      display: "flex",
      fontWeight: 700,
    }),
    singleValue: () => ({
      padding: "15px 10px",
    }),

    input: () => ({
      opacity: 0,
      width: 0,
    }),

    option: () => ({
      color: "#333",
      fontWeight: 700,
      padding: "2px 15px",
      ":hover": {
        color: "#4db6ac",
        cursor: "pointer",
      },
    }),

    indicatorsContainer: () => ({
      paddingTop: "15px",
    }),

    dropdownIndicator: () => ({
      paddingRight: "10px",
      color: "#1de9b6",
      transition: "all 1s",
      ":hover": {
        color: "#00695c",
        cursor: "pointer",
        opacity: "0.5",
      },
    }),
  };

  const options=times.map((time) => {
    return {
      value: `${time}`,
      label: <div>{time}</div>,
    };
  })

  return (
    <div className="reservationSelect">
      <Select
        options={options}
        onChange={handleChange}
        name="time"
        id="reservationSelect"
        placeholder="Seleccionar hora de llegada"
        styles={customStyles}
        getOptionValue={(option) => option.value}
      />
    </div>
  );
}
