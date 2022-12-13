package Digitalbooking.accommodations.entities;

import Digitalbooking.accommodations.dto.UsuarioDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Pattern(regexp ="^[^\\s].*",message = "El nombre no puede comenzar con un carácter no válido")
    @NotEmpty(message = "El usuario tiene que contener un nombre")
    @Size(min = 1,max = 50,message = "El nombre del usuario no puede contener menos de un carácter y más de cincuenta")
    @Column(name = "nombre")
    private String nombre;

    @Pattern(regexp ="^[^\\s].*",message = "El apellido no puede comenzar con un carácter no válido")
    @NotEmpty(message = "El usuario tiene que contener un apellido")
    @Size(min = 1,max = 50,message = "El apellido del usuario no puede contener menos de un carácter y más de cincuenta")
    @Column(name = "apellido")
    private String apellido;

    @Pattern(regexp ="^[^\\s].*",message = "El email no puede comenzar con un carácter no válido")
    @Email(regexp = "^[a-zA-Z0-9_!#$%&'\\*+/=?{|}~^.-]+@[a-zA-Z0-9.-]+$", message = "El email debe ser válido")
    @NotEmpty(message = "El usuario tiene que contener un email")
    @Size(min = 1,max = 50,message = "El email del usuario no puede contener menos de un carácter y más de cincuenta")
    @Column(name = "email", unique = true)
    private String email;

    @NotEmpty(message = "El usuario tiene que contener una contraseña")
    @Column(name ="contrasenia", length = 300)
    private String contrasenia;

    @Pattern(regexp ="^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$",message = "El telefono debe ser cargado de la forma '+xx (xxx) xxx-xxxx'")
    @Size(max = 50,message = "El telefono del usuario no puede contener menos de un carácter y más de cincuenta")
    @Column(name = "telefono")
    private String telefono;

    @NotNull(message = "El usuario tiene que tener un rol determinado")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "roles_id",nullable = false)
    private Rol roles;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore
    private List<Puntuacion> puntuacion;

    @OneToMany(mappedBy = "producto")
    @JsonIgnore
    private Set<Favorito> favoritos;

    @NotNull(message = "La verificación no puede ser nula, tiene que ser true o false")
    @Column(name = "verificacion")
    private Boolean enable;

    @NotEmpty(message = "El código de verificación no puede estar vacío")
    @Column(name = "codigo_verificacion", updatable = false)
    private String verificationCode;

    @OneToMany(mappedBy = "usuario")
    @JsonIgnore
    private List<Producto> producto;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Usuario usuario = (Usuario) o;
        return Objects.equals(id, usuario.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public UsuarioDTO toDto() {
        UsuarioDTO usuarioDTO = new UsuarioDTO();
        usuarioDTO.setId(id);
        usuarioDTO.setNombre(nombre);
        usuarioDTO.setApellido(apellido);
        usuarioDTO.setEmail(email);
        usuarioDTO.setContrasenia(contrasenia);
        usuarioDTO.setTelefono(telefono);
        usuarioDTO.setRoles(roles);
        usuarioDTO.setPuntuacion(puntuacion);
        usuarioDTO.setEnable(enable);
        usuarioDTO.setVerificationCode(verificationCode);
        usuarioDTO.setProducto(producto);
        return usuarioDTO;
    }
}
