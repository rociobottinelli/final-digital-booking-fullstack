package Digitalbooking.accommodations.entities;

import Digitalbooking.accommodations.dto.ReservaDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name= "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "La reserva debe tener una hora de comienzo")
    @Column(name="hora_comienzo")
    private LocalTime horaComienzo;

    @NotNull(message = "La reserva debe tener una fecha de inicio")
    @Column(name="fecha_inicio")
    private LocalDate fechaInicio;

    @NotNull(message = "La reserva debe tener una fecha de fin")
    @Column(name="fecha_fin")
    private LocalDate fechaFin;

    @NotNull(message = "El id de usuario no puede ser nulo")
    @ManyToOne(fetch = FetchType.EAGER,cascade = {CascadeType.MERGE, CascadeType.REMOVE})
    @JoinColumn(name = "usuarios_id", nullable = false)
    private Usuario usuario;

    @NotNull(message = "El id de producto no puede ser nulo")
    @ManyToOne
    @JoinColumn(name = "producto_id")
    @JsonIgnore
    private Producto producto;

    @Column(name = "nombre_reserva")
    private String nombreReserva;

    @Column(name = "apellido_reserva")
    private String apellidoReserva;

    @Email(regexp = "^[a-zA-Z0-9_!#$%&'\\*+/=?{|}~^.-]+@[a-zA-Z0-9.-]+$", message = "El email debe ser válido")
    @Column(name = "email_reserva")
    private String emailReserva;

    @Column(name = "telefono_reserva")
    private String telefonoReserva;

    @Column(name = "comentarios")
    private String comentarios;

    @Column(name = "vacunacion")
    private Boolean vacunacion;

    @Column(name = "email_enviado")
    private Boolean sendEmail;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reserva reserva = (Reserva) o;
        return Objects.equals(id, reserva.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public ReservaDTO toDTO() {
        ReservaDTO reservaDTO = new ReservaDTO();
        reservaDTO.setId(id);
        reservaDTO.setHoraComienzo(horaComienzo);
        reservaDTO.setFechaInicio(fechaInicio);
        reservaDTO.setFechaFin(fechaFin);
        reservaDTO.setUsuario(usuario);
        reservaDTO.setProducto(producto);
        reservaDTO.setNombreReserva(nombreReserva);
        reservaDTO.setApellidoReserva(apellidoReserva);
        reservaDTO.setEmailReserva(emailReserva);
        reservaDTO.setTelefonoReserva(telefonoReserva);
        reservaDTO.setComentarios(comentarios);
        reservaDTO.setVacunacion(vacunacion);
        reservaDTO.setSendEmail(sendEmail);
        return reservaDTO;
    }
}
