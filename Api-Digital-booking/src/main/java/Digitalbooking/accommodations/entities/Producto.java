package Digitalbooking.accommodations.entities;

import Digitalbooking.accommodations.dto.ProductoDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Objects;
import java.util.Set;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;

    @Pattern(regexp ="^[^\\s].*",message = "El nombre no puede comenzar con un carácter no válido")
    @NotEmpty(message = "El producto tiene que contener un nombre")
    @Size(min = 1,max = 50,message = "El nombre del producto no puede contener menos de un carácter y más de cincuenta")
    @Column(name = "nombre")
    private  String name;

    @Pattern(regexp ="^[^\\s].*",message = "El título no puede comenzar con un carácter no válido")
    @NotEmpty(message = "El producto tiene que contener un título")
    @Size(min = 1,max = 50,message = "El título del producto no puede contener menos de un carácter y más de cincuenta")
    @Column(name = "titulo")
    private  String title;

    @Pattern(regexp ="^[^\\s].*",message = "La descripción no puede comenzar con un carácter no válido")
    @NotEmpty(message = "El producto tiene que contener una descripción")
    @Size(min = 20,max = 2000,message = "La descripción no puede contener menos de veinte caracteres y más de quinientos")
    @Column(name = "descripcion",length = 500)
    private String description;

    @NotEmpty(message = "El producto tiene que tener una longitud")
    @Column(name = "longitud")
    private String longitud;

    @NotEmpty(message = "El producto tiene que tener una latitud")
    @Column(name = "latitud")
    private String latitud;

    @Pattern(regexp ="^[^\\s].*", message = "El domicilio no puede comenzar con un carácter no válido")
    @NotEmpty(message = "El producto tiene que contener un domicilio")
    @Size(min = 1, max = 50, message = "El domicilio no puede contener menos de un caracter y más de cincuenta")
    @Column(name = "domicilio")
    private String domicilio;

    @NotNull(message = "El id de categoría no puede ser nulo")
    @ManyToOne()
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    @NotEmpty(message = "Las imagenes no pueden ser nulas")
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "producto_id", nullable = false)
    private List<Imagen> imagen;

    @NotNull(message = "Las características no pueden ser nulas")
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "caracteristica_id", referencedColumnName = "id", nullable = false)
    private Caracteristica caracteristica;

    @NotNull(message = "El id de ciudad no puede ser nulo")
    @ManyToOne()
    @JoinColumn(name = "ciudad_id", referencedColumnName = "id", nullable = false)
    private Ciudad ciudad;

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private List<Reserva> reservas;

    @Column(name = "puntuacion_promedio")
    private Double puntuacion;

    @OneToMany(mappedBy = "producto", fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Favorito> favoritos;

    @NotNull(message = "Las políticas no pueden ser nulas")
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "politicas_id", referencedColumnName = "id", nullable = false)
    private Politicas politicas;

    @NotNull(message = "El producto debe tener un precio por dia")
    @Column(name = "precio_por_dia")
    private Double estadia;

    @NotNull(message = "El id del usuario no puede ser nulo")
    @ManyToOne()
    @JoinColumn(name = "usuario_id")
    @JsonIgnore
    private Usuario usuario;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Producto producto = (Producto) o;
        return Objects.equals(id, producto.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public ProductoDTO toDto() {
        ProductoDTO productoDTO = new ProductoDTO();
        productoDTO.setId(id);
        productoDTO.setName(name);
        productoDTO.setTitle(title);
        productoDTO.setDescription(description);
        productoDTO.setLongitud(longitud);
        productoDTO.setLatitud(latitud);
        productoDTO.setDomicilio(domicilio);
        productoDTO.setCategoria(categoria);
        productoDTO.setCaracteristica(caracteristica);
        productoDTO.setCiudad(ciudad);
        productoDTO.setImagen(imagen);
        productoDTO.setReservas(reservas);
        productoDTO.setPuntuacion(puntuacion);
        productoDTO.setPoliticas(politicas);
        productoDTO.setEstadia(estadia);
        productoDTO.setUsuario(usuario);
        return productoDTO;
    }
}
