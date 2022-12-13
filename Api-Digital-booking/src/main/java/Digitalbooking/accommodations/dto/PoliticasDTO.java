package Digitalbooking.accommodations.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PoliticasDTO {

    private Integer id;

    private String checkout;

    private Boolean fiesta;

    private Boolean fumar;

    private Boolean distanciamiento;

    private Boolean detectorHumo;

    private Boolean depositoSeguridad;

    private Boolean cancelacionUno;

    private Boolean cancelacionDos;

    private Boolean cancelacionTres;
}
