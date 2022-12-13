package Digitalbooking.accommodations.controller;

import Digitalbooking.accommodations.exception.BadRequestException;
import Digitalbooking.accommodations.exception.FieldAlreadyExistException;
import Digitalbooking.accommodations.exception.NotFoundException;
import Digitalbooking.accommodations.dto.LoginDTO;
import Digitalbooking.accommodations.dto.UserDTO;
import Digitalbooking.accommodations.dto.UsuarioDTO;
import Digitalbooking.accommodations.entities.Usuario;
import Digitalbooking.accommodations.repository.IUsuarioRepository;
import Digitalbooking.accommodations.security.JWTAuthResponseDTO;
import Digitalbooking.accommodations.security.JwtTokenProvider;
import Digitalbooking.accommodations.service.impl.UsuarioService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
@Tag(name = "Users", description = "Operations related to logging or register for users or administrators")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Operation(summary = "Create a new user")
    @PostMapping("/registrar")
    public ResponseEntity<UsuarioDTO> createUser(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the user's data to be created")
            @RequestBody UsuarioDTO usuarioDTO) throws MessagingException, UnsupportedEncodingException {
        if(usuarioRepository.existsByEmail(usuarioDTO.getEmail())) {
            throw new FieldAlreadyExistException("Ya existe una cuenta asociada al email " + usuarioDTO.getEmail());
        }
        UsuarioDTO newUsuarioDTO = usuarioService.createUser(usuarioDTO);
        newUsuarioDTO.setContrasenia(passwordEncoder.encode(usuarioDTO.getContrasenia()));
        String URL = System.getenv().get("APP_HOST_FRONT");
        usuarioService.sendVerificationEmail(newUsuarioDTO, URL);
        return new ResponseEntity<>(newUsuarioDTO, HttpStatus.CREATED);
    }

    @Operation(summary = "Get list of users")
    @GetMapping("/list")
    public  ResponseEntity<List<UsuarioDTO>>findAll(){
        List<UsuarioDTO>usuarioDTOSet = usuarioService.findAll();
        return new ResponseEntity<>(usuarioDTOSet,HttpStatus.OK);
    }
    
    @Operation(summary = "Logging an USER or ADMIN into the API")
    @PostMapping("/login")
    public ResponseEntity<JWTAuthResponseDTO> authenticateUser(@RequestBody LoginDTO loginDTO) {
        Optional<Usuario> usuarioEmail = usuarioRepository.findByEmail(loginDTO.getEmail());
        if (usuarioEmail.get().getEnable()){
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getContrasenia()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            UsuarioDTO usuario = usuarioService.findByEmail(loginDTO.getEmail());
            UserDTO user = new UserDTO(usuario.getId(), usuario.getNombre(), usuario.getApellido(), usuario.getRoles().getName());
            String token = jwtTokenProvider.generateToken(authentication, user);
            return new ResponseEntity<>(new JWTAuthResponseDTO(token), HttpStatus.OK);
        }
        throw new NotFoundException("La cuenta no ha sido verificada, por favor verifiquela desde su email");
    }

    @Operation(summary = "Verify the account")
    @GetMapping("/verify/{code}")
    public ResponseEntity<?> verifyAccount(@PathVariable("code") String code) {
        if (usuarioService.verify(code)) {
            return new ResponseEntity<>("Cuenta verificada",HttpStatus.OK);
        } else {
            throw new BadRequestException("No se pudo verificar la cuenta");
        }
    }

    @Operation(summary = "Delete account",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteById(@PathVariable("id") Integer id) {
        usuarioService.deleteById(id);
        return new ResponseEntity<>("Cuenta eliminada", HttpStatus.OK);
    }

    @Operation(summary = "Get user by id")
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO>findOneById(@PathVariable("id") Integer id){
        UsuarioDTO usuarioDTO=usuarioService.findOneById(id);
        if(usuarioDTO==null){
            throw new NotFoundException("No se encontró ningún usuario con el id: " + id);
        }else{
            return new ResponseEntity<>(usuarioDTO, HttpStatus.OK);
        }
    }

    @Operation(summary = "Update a user",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PutMapping("/updateUser")
    public ResponseEntity<UsuarioDTO>updateUser(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the user's data to be updated")
            @RequestBody UsuarioDTO userDTO) throws MessagingException, UnsupportedEncodingException {
        UsuarioDTO updateUserDTO = usuarioService.update(userDTO);
        String URL = System.getenv().get("APP_HOST_FRONT");
        usuarioService.sendEmailUpdate(updateUserDTO, URL);
        return new ResponseEntity<>(updateUserDTO, HttpStatus.CREATED);
    }

    @Operation(summary = "Update a user password",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PutMapping("/updatePassword")
    public ResponseEntity<UsuarioDTO>updatePassword(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the user's password to be updated")
            @RequestBody UsuarioDTO adminDTO) throws MessagingException, UnsupportedEncodingException {
        UsuarioDTO updateUserDTO = usuarioService.updatePassword(adminDTO);
        String URL = System.getenv().get("APP_HOST_FRONT");
        usuarioService.sendEmailUpdate(updateUserDTO, URL);
        return new ResponseEntity<>(updateUserDTO, HttpStatus.CREATED);
    }
}
