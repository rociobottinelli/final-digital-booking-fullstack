package Digitalbooking.accommodations.dto;

import Digitalbooking.accommodations.entities.Producto;
import Digitalbooking.accommodations.entities.Puntuacion;
import Digitalbooking.accommodations.entities.Reserva;
import Digitalbooking.accommodations.entities.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class PuntuacionDTO {

    private Integer id;

    private Double puntuacion;

    private Producto productos;

    private Usuario usuario;

    private Reserva reserva;

    private String comentarios;

    public Puntuacion toEntity() {
        Puntuacion puntuacionEn = new Puntuacion();
        puntuacionEn.setId(id);
        puntuacionEn.setPuntuacion(puntuacion);
        puntuacionEn.setProductos(productos);
        puntuacionEn.setUsuario(usuario);
        puntuacionEn.setReserva(reserva);
        puntuacionEn.setComentarios(comentarios);
        return puntuacionEn;
    }
}
