package Digitalbooking.accommodations.dto;

import Digitalbooking.accommodations.entities.Ciudad;
import Digitalbooking.accommodations.entities.Lugar;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class LugarDTO {

    private Integer id;

    private String nombre;

    private String direccion;

    private String introduccion;

    private String descripcion;

    private Double puntaje;

    private Double costoPromedio;

    private String paginaWeb;

    private String imagenPortada;

    private Ciudad ciudad;

    private String longitud;

    private String latitud;

    public Lugar toEntity() {
        Lugar lugar = new Lugar();
        lugar.setId(id);
        lugar.setNombre(nombre);
        lugar.setDireccion(direccion);
        lugar.setDescripcion(descripcion);
        lugar.setIntroduccion(introduccion);
        lugar.setPuntaje(puntaje);
        lugar.setCostoPromedio(costoPromedio);
        lugar.setPaginaWeb(paginaWeb);
        lugar.setImagenPortada(imagenPortada);
        lugar.setCiudad(ciudad);
        lugar.setLatitud(latitud);
        lugar.setLongitud(longitud);
        return lugar;
    }
}
