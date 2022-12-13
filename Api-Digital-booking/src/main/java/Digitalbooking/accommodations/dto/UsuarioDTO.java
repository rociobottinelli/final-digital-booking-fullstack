package Digitalbooking.accommodations.dto;


import Digitalbooking.accommodations.entities.Producto;
import Digitalbooking.accommodations.entities.Puntuacion;
import Digitalbooking.accommodations.entities.Rol;
import Digitalbooking.accommodations.entities.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UsuarioDTO implements Serializable {

    private Integer id;

    private String nombre;

    private String apellido;

    private String email;

    private String contrasenia;

    private String telefono;

    private Rol roles;

    private List<Puntuacion> puntuacion;

    private Boolean enable;

    private String verificationCode;

    private List<Producto> producto;

    public Usuario toEntity() {
        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre(nombre);
        usuario.setApellido(apellido);
        usuario.setEmail(email);
        usuario.setContrasenia(contrasenia);
        usuario.setTelefono(telefono);
        usuario.setRoles(roles);
        usuario.setPuntuacion(puntuacion);
        usuario.setEnable(enable);
        usuario.setVerificationCode(verificationCode);
        usuario.setProducto(producto);
        return usuario;
    }
}
