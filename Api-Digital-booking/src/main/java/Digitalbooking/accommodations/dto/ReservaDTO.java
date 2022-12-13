package Digitalbooking.accommodations.dto;

import Digitalbooking.accommodations.entities.Producto;
import Digitalbooking.accommodations.entities.Reserva;
import Digitalbooking.accommodations.entities.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservaDTO {

    private Integer id;

    private LocalTime horaComienzo;

    private LocalDate fechaInicio;

    private LocalDate fechaFin;

    private Usuario usuario;

    private Producto producto;

    private String nombreReserva;

    private String apellidoReserva;

    private String emailReserva;

    private String telefonoReserva;

    private String comentarios;

    private Boolean vacunacion;

    private Boolean sendEmail;

    public Reserva toEntity() {
        Reserva reserva = new Reserva();
        reserva.setId(id);
        reserva.setHoraComienzo(horaComienzo);
        reserva.setFechaInicio(fechaInicio);
        reserva.setFechaFin(fechaFin);
        reserva.setUsuario(usuario);
        reserva.setProducto(producto);
        reserva.setNombreReserva(nombreReserva);
        reserva.setApellidoReserva(apellidoReserva);
        reserva.setEmailReserva(emailReserva);
        reserva.setTelefonoReserva(telefonoReserva);
        reserva.setComentarios(comentarios);
        reserva.setVacunacion(vacunacion);
        reserva.setSendEmail(sendEmail);
        return reserva;
    }
}
