package Digitalbooking.accommodations.security;

import Digitalbooking.accommodations.exception.MalformedHeaderException;
import Digitalbooking.accommodations.dto.UserDTO;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenProvider {

    @Value("${app.jwt-secret}")
    private String jwtSecret;

    @Value("${app.jwt-expiration-miliseconds}")
    private int jwtExpirationInMs;

    public String generateToken(Authentication authentication, UserDTO user) {
        String username = authentication.getName();
        Date fechaActual = new Date();
        Date fechaExpiracion = new Date(fechaActual.getTime() + jwtExpirationInMs);

        String token = Jwts.builder().setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(fechaExpiracion)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .claim("id", user.getId())
                .claim("nombre", user.getNombre())
                .claim("apellido",user.getApellido())
                .claim("rol", user.getRol())
                .compact();

        return token;
    }

    public String obtenerUsernameDelJWT(String token){
        Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
        return claims.getSubject();
    }

    public boolean validarToken(String token){
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        } catch (SignatureException ex){
            throw new MalformedHeaderException("Firma JWT no valida");
        } catch (MalformedJwtException ex) {
            throw new MalformedHeaderException("Token JWT no valido");
        } catch (ExpiredJwtException ex) {
            throw new MalformedHeaderException("Token JWT caducado");
        } catch (UnsupportedJwtException ex) {
            throw new MalformedHeaderException("Token JWT no compatible");
        } catch (IllegalArgumentException ex) {
            throw new MalformedHeaderException("La cadena claims JWT está vacia");
        }
    }
}
