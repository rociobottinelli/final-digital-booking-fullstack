package Digitalbooking.accommodations.entities;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Objects;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Pattern(regexp = "^[^\\s].*",message = "El título no puede comenzar con un carácter no válido ")
    @NotEmpty(message = "La categoría tiene que contener un título")
    @Size(min = 1,max = 50,message = "El título no puede contener menos de un carácter y más de cincuenta")
    @Column(name = "titulo")
    private String title;

    @Pattern(regexp = "^[^\\s].*",message = "La descripción no puede comenzar con un carácter no válido ")
    @NotEmpty(message = "La categoría tiene que contener una descripción")
    @Size(min = 1,max = 500,message = "La descripción no puede contener menos de veinte caracteres y más de quinientos")
    @Column(name = "descripcion",length = 500)
    private String description;

    @NotEmpty(message = "La categoría tiene que contener una imagen")
    @Column(name="url_imagen")
    private String imgUrl;

    @Column(name = "cant_productos")
    private Integer productos;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Categoria that = (Categoria) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
