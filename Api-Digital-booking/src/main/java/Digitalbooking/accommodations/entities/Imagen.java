package Digitalbooking.accommodations.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name= "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer id;

    @NotEmpty(message = "La imagen debe tener un titulo")
    @Size(min = 1,max = 50,message = "El titulo de la imagen no puede contener menos de un carácter y más de cincuenta")
    @Column(name="titulo")
    private String title;

    @NotEmpty(message = "La imagen debe tener una url")
    @Size(min = 7, message = "La url no puede contener menos de siete caracteres y más de quinientos")
    @Column(name="URL")
    private String url;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Imagen imagen = (Imagen) o;
        return Objects.equals(id, imagen.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
