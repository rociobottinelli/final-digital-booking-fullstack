package Digitalbooking.accommodations.security;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JWTAuthResponseDTO {

    private String tokenDeAcceso;
    private String tipoDeToken = "Bearer";

    public JWTAuthResponseDTO(String tokenDeAcceso) {
        this.tokenDeAcceso = tokenDeAcceso;
    }
}
