package Digitalbooking.accommodations.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Objects;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "caracteristicas")
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "El valor de cocina debe ser verdadero o falso")
    @Column(name = "cocina")
    private Boolean kitchen;

    @NotNull(message = "El valor de televisor debe ser verdadero o falso")
    @Column(name = "televisor")
    private Boolean tv;

    @NotNull(message = "El valor de aire acondicionado debe ser verdadero o falso")
    @Column(name = "aire_acondicionado")
    private Boolean airConditioning;

    @NotNull(message = "El valor de apto mascotas debe ser verdadero o falso")
    @Column(name = "apto_mascotas")
    private Boolean petsAllowed;

    @NotNull(message = "El valor de estacionamiento gratuito debe ser verdadero o falso")
    @Column(name = "estacionamiento_gratuito")
    private Boolean freeParking;

    @NotNull(message = "El valor de pileta debe ser verdadero o falso")
    @Column(name = "pileta")
    private Boolean pool;

    @NotNull(message = "El valor de wifi debe ser verdadero o falso")
    @Column(name = "wifi")
    private Boolean wifi;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Caracteristica that = (Caracteristica) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
