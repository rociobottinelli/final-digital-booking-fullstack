package Digitalbooking.accommodations.dto;

import Digitalbooking.accommodations.entities.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ProductoDTO {

    private  Integer id;

    private  String name;

    private  String title;

    private String description;

    private String longitud;

    private String latitud;

    private String domicilio;

    private Categoria categoria;

    private Caracteristica caracteristica;

    private Ciudad ciudad;

    private List<Imagen> imagen;

    private List<Reserva> reservas;

    private Double puntuacion;

    private Politicas politicas;

    private Double estadia;

    private Usuario usuario;

    public Producto toEntity() {
        Producto producto = new Producto();
        producto.setId(id);
        producto.setName(name);
        producto.setTitle(title);
        producto.setDescription(description);
        producto.setLongitud(longitud);
        producto.setLatitud(latitud);
        producto.setDomicilio(domicilio);
        producto.setCategoria(categoria);
        producto.setCaracteristica(caracteristica);
        producto.setCiudad(ciudad);
        producto.setImagen(imagen);
        producto.setReservas(reservas);
        producto.setPuntuacion(puntuacion);
        producto.setPoliticas(politicas);
        producto.setEstadia(estadia);
        producto.setUsuario(usuario);
        return producto;
    }

}
