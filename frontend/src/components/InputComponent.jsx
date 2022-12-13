const InputComponent = ({
  placeholder,
  estado,
  cambiarEstado,
  classN,
  funct,
  label,
  messageError,
  name,
  regExp,
  type,
}) => {
  const onChange = (e) => {
    cambiarEstado({
      ...estado,
      field: e.target.value,
    });
  };

  const validate = () => {
    if (regExp) {
      if (regExp.test(estado.field)) {
        cambiarEstado({
          ...estado,
          valid: "true",
        });
      } else {
        cambiarEstado({
          ...estado,
          valid: "false",
        });
      }
    }
    if (funct) {
      funct();
    }
  };

  return (
    <div className={classN}>
      <label
        className={
          estado.valid === "true" || estado.valid === null ? "" : "label-error"
        }
        htmlFor={name}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={validate}
        onBlur={validate}
        type={type}
        name={name}
        id={name}
        value={estado.field}
        autoComplete="on"
        className={
          estado.valid === "true" || estado.valid === null ? "" : "error"
        }
      ></input>
      <p
        className={
          estado.valid === "true" || estado.valid === null
            ? ""
            : "message-error"
        }
      >
        {messageError}
      </p>
    </div>
  );
};

export default InputComponent;
