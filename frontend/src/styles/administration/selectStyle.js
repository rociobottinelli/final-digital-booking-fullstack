const selectStyle = {
  control: () => ({
    marginTop: "7px",
    borderRadius: "5px",
    border: "2px solid transparent",
    boxShadow: "0px 1px 5px rgb(0 0 0 / 15%)",
    display: "flex",
    height: "40px",
    justifyContent: "space-between",
    alignItems: "center",
  }),

  option: () => ({
    borderBottom: "solid 1px #1dbeb4",
    paddingTop: "10px",
    paddingRight: "60px",
    paddingBottom: "15px",
    fontWeight: "800px",

    ":hover": {
      backgroundColor: "#F3F3F4",
      cursor: "pointer",
    },
    ":last-child": {
      borderBottom: "none",
    },
  }),
  placeholder: () => ({
    fontWeight: "300",
    fontSize: "12px",
    color: "gray",
    padding: "15px 10px",
  }),

  valueContainer: () => ({
    paddingLeft: "5px",
    display: "flex",
  }),
  singleValue: () => ({
    padding: "15px 10px",

  }),
  
  container: () => ({
    width: "100%",
  }),

  input: () => ({
    opacity: 0,
    width: 0,
  }),

  menu: () => ({
    backgroundColor: "white",
    borderRadius: "5px",
    marginTop: "8px",
    boxShadow: "0px 1px 5px rgb(0 0 0 / 15%)",
    position: "absolute",
    paddingLeft: "20px",
    paddingBottom: "10px",
    zIndex: "10",
  }),

  indicatorsContainer: () => ({
    paddingTop: "8px",
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


}



export default selectStyle;
