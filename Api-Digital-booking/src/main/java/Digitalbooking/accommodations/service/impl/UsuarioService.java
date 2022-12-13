package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.UsuarioDTO;
import Digitalbooking.accommodations.entities.Usuario;
import Digitalbooking.accommodations.repository.IUsuarioRepository;
import Digitalbooking.accommodations.service.IUsuarioService;
import com.fasterxml.jackson.databind.ObjectMapper;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.*;

@Service
public class UsuarioService implements IUsuarioService {

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private ObjectMapper mapper;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UsuarioDTO findById(Integer id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        UsuarioDTO usuarioDTO = null;
        if(usuario.isPresent())
            usuarioDTO = mapper.convertValue(usuario,UsuarioDTO.class);
        return usuarioDTO;
    }

    @Override
    public UsuarioDTO create(UsuarioDTO usuarioDTO) {
        return null;
    }

    @Override
    public UsuarioDTO createUser(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioDTO.toEntity();
        String encodedPassword = this.bCryptPasswordEncoder.encode(usuario.getContrasenia());
        usuario.setContrasenia(encodedPassword);
        usuario.setEnable(false);
        String randomCode = RandomString.make(64);
        usuario.setVerificationCode(randomCode);
        Usuario resUsuario = usuarioRepository.save(usuario);
        return resUsuario.toDto();
    }

    @Override
    public UsuarioDTO findOneById(Integer id) {
        Usuario usuario=usuarioRepository.findOneById(id);
        return usuario.toDto();
    }

    @Override
    public UsuarioDTO updatePassword(UsuarioDTO adminDTO) {
        UsuarioDTO admin=this.findOneById(adminDTO.getId());
        if (admin.getContrasenia().equals(adminDTO.getContrasenia()) || adminDTO.getContrasenia() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La contraseña que desea guardar es igual a la anterior o es nula");
        } else {
            String encodedPassword = this.bCryptPasswordEncoder.encode(adminDTO.getContrasenia());
            adminDTO.setContrasenia(encodedPassword);
            adminDTO.setEnable(admin.getEnable());
            adminDTO.setVerificationCode(admin.getVerificationCode());
            adminDTO.setRoles(admin.getRoles());
            adminDTO.setTelefono(admin.getTelefono());
            adminDTO.setEmail(admin.getEmail());
            adminDTO.setApellido(admin.getApellido());
            adminDTO.setNombre(admin.getNombre());
            adminDTO.setPuntuacion(admin.getPuntuacion());
            Usuario resAdmin = usuarioRepository.save(adminDTO.toEntity());
            return resAdmin.toDto();
        }
    }

    public void sendVerificationEmail(UsuarioDTO usuario, String siteURL) throws MessagingException, UnsupportedEncodingException {
        String subject = "Verificá tu registro";
        String senderName = "Digital Booking Team";
        String verifyURL = siteURL + "/usuarios/verify/" + usuario.getVerificationCode();

        String mailContent = "<p style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#3d4852;font-size:16px;line-height:1.5em;margin-top:0;text-align:left\">Querido <b>" + usuario.getNombre() + ",<b></p>";
        mailContent += "<br><p  style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#3d4852;font-size:16px;line-height:1.5em;margin-top:0;text-align:left\">Por favor haz click en el siguiente link para verificar tu cuenta:</p>";
        mailContent += "<br><center><h2><a href=\"" + verifyURL + "\" target=\"_self\" style=\"color:#1DBEB4;\">VERIFICAR</a></h2></center>";
        mailContent += "<br><p  style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#3d4852;font-size:16px;line-height:1.5em;margin-top:0;text-align:left\">¡Gracias!<br>The Digital Booking Team</p>";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("help.digitalbooking@gmail.com", senderName);
        helper.setTo(usuario.getEmail());
        helper.setSubject(subject);
        helper.setText(mailContent, true);

        mailSender.send(message);
    }

    public void sendEmailUpdate(UsuarioDTO usuario, String siteURL) throws MessagingException, UnsupportedEncodingException {
        String subject = "Tus datos fueron modificados";
        String senderName = "Digital Booking Team";
        String verifyURL = siteURL + "/perfil";

        String mailContent = "<p style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#3d4852;font-size:16px;line-height:1.5em;margin-top:0;text-align:left\">Querido <b>" + usuario.getNombre() + ",<b></p>";
        mailContent += "<br><p  style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#3d4852;font-size:16px;line-height:1.5em;margin-top:0;text-align:left\">Tus datos fueron modificados, haz click en el siguiente enlace para iniciar sesión:</p>";
        mailContent += "<br><center><h2><a href=\"" + verifyURL + "\" target=\"_self\" style=\"color:#1DBEB4;\">Ir a tu perfil</a></h2></center>";
        mailContent += "<br><p  style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#3d4852;font-size:16px;line-height:1.5em;margin-top:0;text-align:left\">¡Gracias!<br>The Digital Booking Team</p>";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("help.digitalbooking@gmail.com", senderName);
        helper.setTo(usuario.getEmail());
        helper.setSubject(subject);
        helper.setText(mailContent, true);

        mailSender.send(message);
    }

    @Override
    public void deleteById(Integer id) {
        usuarioRepository.deleteById(id);
    }

    @Override
    public UsuarioDTO update(UsuarioDTO usuarioDTO) {
        UsuarioDTO user=this.findOneById(usuarioDTO.getId());
        if (user.getEmail().equals(usuarioDTO.getEmail()) || !usuarioRepository.existsByEmail(usuarioDTO.getEmail())) {
            usuarioDTO.setContrasenia(user.getContrasenia());
            usuarioDTO.setEnable(user.getEnable());
            usuarioDTO.setVerificationCode(user.getVerificationCode());
            usuarioDTO.setPuntuacion(user.getPuntuacion());
            Usuario resUsuario = usuarioRepository.save(usuarioDTO.toEntity());
            return resUsuario.toDto();
        }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Ya existe una cuenta asociada a ese email");
    }

    @Override
    public List<UsuarioDTO> findAll() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        List<UsuarioDTO>usuarioDTOS = new ArrayList<>();
        for (Usuario usuario : usuarios){
            usuarioDTOS.add(usuario.toDto());
        }
        return usuarioDTOS;
    }

    @Override
    public UsuarioDTO findByEmail(String email) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);
        UsuarioDTO usuarioDTO = null;
        if(usuario.isPresent())
            usuarioDTO = mapper.convertValue(usuario,UsuarioDTO.class);
        return usuarioDTO;
    }

    @Transactional
    public Boolean verify(String verificationCode){
        Usuario usuario = usuarioRepository.findByVerificationCode(verificationCode);
        if (usuario == null || usuario.getEnable() || !usuario.getVerificationCode().equals(verificationCode)) {
            return false;
        } else {
            usuario.setEnable(true);
            usuarioRepository.save(usuario);
            return true;
        }
    }
}
