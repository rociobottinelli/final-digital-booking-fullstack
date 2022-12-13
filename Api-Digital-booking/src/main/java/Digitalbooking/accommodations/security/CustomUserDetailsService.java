package Digitalbooking.accommodations.security;

import Digitalbooking.accommodations.entities.Rol;
import Digitalbooking.accommodations.entities.Usuario;
import Digitalbooking.accommodations.repository.IUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);
        if (usuario.isEmpty()) {
            throw new UsernameNotFoundException("Usuario no encontrado con el email: " + email);
        }
        return new User(usuario.get().getEmail(), usuario.get().getContrasenia(), mapearAutoridadesRoles(usuario.get().getRoles()));
    }

    private Collection<? extends GrantedAuthority> mapearAutoridadesRoles(Rol rol){
        return Collections.singleton(new SimpleGrantedAuthority(rol.getName()));
    }
}
