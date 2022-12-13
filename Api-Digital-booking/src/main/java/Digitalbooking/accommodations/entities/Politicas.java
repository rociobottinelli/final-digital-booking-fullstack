package Digitalbooking.accommodations.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Objects;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "politicas")
public class Politicas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotEmpty(message = "El horario del check-out no puede estar vacío")
    @Column(name = "check_out")
    private String checkout;

    @NotNull(message = "El valor de fiesta debe ser verdadero o falso")
    @Column(name = "fiesta")
    private Boolean fiesta;

    @NotNull(message = "El valor de fumar debe ser verdadero o falso")
    @Column(name = "fumar")
    private Boolean fumar;

    @NotNull(message = "El valor del distanciamiento debe ser verdadero o falso")
    @Column(name = "distanciamiento_social")
    private Boolean distanciamiento;

    @NotNull(message = "El valor del detector de humo debe ser verdadero o falso")
    @Column(name = "detector_humo")
    private Boolean detectorHumo;

    @NotNull(message = "El valor del depósito de seguridad debe ser verdadero o falso")
    @Column(name = "deposito_seguridad")
    private Boolean depositoSeguridad;

    @NotNull(message = "El valor de la cancelación uno debe ser verdadero o falso")
    @Column(name = "cancelacion_uno")
    private Boolean cancelacionUno;

    @NotNull(message = "El valor de la cancelación dos debe ser verdadero o falso")
    @Column(name = "cancelacion_dos")
    private Boolean cancelacionDos;

    @NotNull(message = "El valor de la cancelación tres debe ser verdadero o falso")
    @Column(name = "cancelacion_tres")
    private Boolean cancelacionTres;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Politicas that = (Politicas) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
