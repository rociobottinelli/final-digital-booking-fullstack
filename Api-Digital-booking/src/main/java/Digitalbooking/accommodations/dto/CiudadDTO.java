package Digitalbooking.accommodations.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CiudadDTO {

    private Long id;

    private String city;

    private PaisDTO pais;
}
