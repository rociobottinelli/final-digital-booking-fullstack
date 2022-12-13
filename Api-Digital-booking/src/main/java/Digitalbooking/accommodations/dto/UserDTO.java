package Digitalbooking.accommodations.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserDTO {

    private Integer id;
    private String nombre;
    private String apellido;
    private String rol;
}
