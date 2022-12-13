package Digitalbooking.accommodations.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CaracteristicaDTO {

    private Integer id;

    private Boolean kitchen;

    private Boolean tv;

    private Boolean airConditioning;

    private Boolean petsAllowed;

    private Boolean freeParking;

    private Boolean pool;

    private Boolean wifi;
}
