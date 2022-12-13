package Digitalbooking.accommodations.entities;


import Digitalbooking.accommodations.dto.LugarDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Objects;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "lugares")
public class Lugar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "introduccion")
    private String introduccion;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "puntaje")
    private Double puntaje;

    @Column(name = "costo_promedio")
    private Double costoPromedio;

    @Column(name = "pagina_web")
    private String paginaWeb;

    @Column(name = "imagen_portada")
    private String imagenPortada;

    @NotEmpty(message = "El producto tiene que tener una longitud")
    @Column(name = "longitud")
    private String longitud;

    @NotEmpty(message = "El producto tiene que tener una latitud")
    @Column(name = "latitud")
    private String latitud;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "ciudad_id", referencedColumnName = "id", nullable = false)
    private Ciudad ciudad;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Lugar lugar = (Lugar) o;
        return Objects.equals(id, lugar.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public LugarDTO toDto() {
        LugarDTO lugarDTO = new LugarDTO();
        lugarDTO.setId(id);
        lugarDTO.setNombre(nombre);
        lugarDTO.setDireccion(direccion);
        lugarDTO.setDescripcion(descripcion);
        lugarDTO.setIntroduccion(introduccion);
        lugarDTO.setPuntaje(puntaje);
        lugarDTO.setCostoPromedio(costoPromedio);
        lugarDTO.setPaginaWeb(paginaWeb);
        lugarDTO.setImagenPortada(imagenPortada);
        lugarDTO.setCiudad(ciudad);
        lugarDTO.setLatitud(latitud);
        lugarDTO.setLongitud(longitud);
        return lugarDTO;
    }
}
