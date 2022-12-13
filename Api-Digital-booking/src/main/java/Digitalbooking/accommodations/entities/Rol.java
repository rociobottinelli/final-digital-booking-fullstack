package Digitalbooking.accommodations.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "roles")
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Pattern(regexp ="^[^\\s].*",message = "El nombre no puede comenzar con un carácter no válido")
    @NotEmpty(message = "El rol tiene que contener un nombre")
    @Size(min = 1,max = 50,message = "El nombre del rol no puede contener menos de un carácter y más de cincuenta")
    @Column(name = "nombre")
    private String name;
}
