export function sumarDias(fecha, dias) {
  fecha = new Date(fecha);
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

export function getDates(arrayFechas) {
  const datosAExcluir = [];
  arrayFechas.forEach((element) => {
    const fechaInicio = new Date(element.fechaInicio + "T00:00:00");
    const fechaFin = new Date(element.fechaFin + "T00:00:00");
    const dateArray = [];
    let currentDate = fechaInicio;

    while (currentDate <= fechaFin) {
      dateArray.push(currentDate);
      currentDate = sumarDias(currentDate, 1);
    }
    dateArray.map((element) => datosAExcluir.push(element.toString()));
  });
  return datosAExcluir;
}

export const excludeDateInCalendar = [];

export  function getDatePicked(fechaInicio, fechaFin) {
    const desde = fechaInicio;
    const hasta = fechaFin;
    let currentDate = desde;
    let dateArray = [];
    let rangoPickerParce = [];
    let resultado = 0;

    while (currentDate <= hasta) {
      dateArray.push(Date.parse(currentDate));
      currentDate = sumarDias(currentDate, 1);
    }
    dateArray.forEach((element) => rangoPickerParce.push(element));

    excludeDateInCalendar.map((element2) => {
      if (rangoPickerParce.includes(element2)) {
        return (resultado += 1);
      } else {
        return (resultado = resultado + 0);
      }
    });
    return resultado;
  }