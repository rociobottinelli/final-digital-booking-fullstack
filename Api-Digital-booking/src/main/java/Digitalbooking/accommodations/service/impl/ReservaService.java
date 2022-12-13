package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.config.EmailReserva;
import Digitalbooking.accommodations.dto.ProductoDTO;
import Digitalbooking.accommodations.dto.ReservaDTO;
import Digitalbooking.accommodations.entities.Reserva;
import Digitalbooking.accommodations.entities.Usuario;
import Digitalbooking.accommodations.repository.IReservaRepository;
import Digitalbooking.accommodations.repository.IUsuarioRepository;
import Digitalbooking.accommodations.service.IReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.*;

@Service
public class ReservaService implements IReservaService {

    @Autowired
    private IReservaRepository reservaRepository;

    @Autowired
    private IUsuarioRepository usuarioRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public ReservaDTO findById(Integer id) {
        Optional<Reserva> reservation = reservaRepository.findById(id);
        ReservaDTO reservationDTO=null;
        if(reservation.isPresent())
            reservationDTO=reservation.get().toDTO();
        return reservationDTO;
    }

    @Override
    public ReservaDTO create(ReservaDTO reservaDTO) {
        Optional<Usuario> user = usuarioRepository.findById(reservaDTO.getUsuario().getId());
        Reserva reserva = reservaDTO.toEntity();
        reserva.setSendEmail(false);
        if (reservaDTO.getNombreReserva() == null || reservaDTO.getApellidoReserva() == null || reservaDTO.getEmailReserva() == null || reservaDTO.getTelefonoReserva() == null) {
            reserva.setNombreReserva(user.get().getNombre());
            reserva.setApellidoReserva(user.get().getApellido());
            reserva.setEmailReserva(user.get().getEmail());
            reserva.setTelefonoReserva(user.get().getTelefono());
            Reserva reservation = reservaRepository.save(reserva);
            return reservation.toDTO();
        } else {
            Reserva reservation = reservaRepository.save(reserva);
            return reservation.toDTO();
        }
    }

    @Override
    public void deleteById(Integer id) {
        reservaRepository.deleteById(id);
    }

    @Override
    public ReservaDTO update(ReservaDTO reservaDTO) {
        Optional<Usuario> user = usuarioRepository.findById(reservaDTO.getUsuario().getId());
        Reserva reserva = reservaDTO.toEntity();
        if (reservaDTO.getNombreReserva() == null || reservaDTO.getApellidoReserva() == null || reservaDTO.getEmailReserva() == null || reservaDTO.getTelefonoReserva() == null) {
            reserva.setNombreReserva(user.get().getNombre());
            reserva.setApellidoReserva(user.get().getApellido());
            reserva.setEmailReserva(user.get().getEmail());
            reserva.setTelefonoReserva(user.get().getTelefono());
            Reserva reservation = reservaRepository.save(reserva);
            return reservation.toDTO();
        } else {
            Reserva reservation = reservaRepository.save(reserva);
            return reservation.toDTO();
        }
    }

    @Override
    public List<ReservaDTO> findAll() {
        List<Reserva> reservations = reservaRepository.findAll();
        List<ReservaDTO>reservationDTOS=new ArrayList<>();
        for (Reserva reservation : reservations){
            reservationDTOS.add(reservation.toDTO());
        }
        return reservationDTOS;
    }

    @Override
    public List<ReservaDTO> findReservationByProductId(Integer id) {
        List<Reserva> reservations = reservaRepository.findReservationByProductId(id);
        List<ReservaDTO>reservationDTOS=new ArrayList<>();
        for (Reserva reservation : reservations){
            reservationDTOS.add(reservation.toDTO());
        }
        return reservationDTOS;
    }

    @Override
    public List<ReservaDTO> findReservationByUserId(Integer id) {
        List<Reserva> reservations = reservaRepository.findReservationByUserId(id);
        List<ReservaDTO>reservationDTOS=new ArrayList<>();
        for (Reserva reservation : reservations){
            reservationDTOS.add(reservation.toDTO());
        }
        return reservationDTOS;
    }

    @Override
    public ReservaDTO findOneById(Integer id) {
        Reserva reservation=reservaRepository.findOneById(id);
        return reservation.toDTO();
    }

    public void sendReservationEmail(ReservaDTO reserva, String siteURL, ProductoDTO productoDatos) throws MessagingException, UnsupportedEncodingException {
        String subject = "¡Gracias! tu reserva en " + productoDatos.getName() + " está confirmada";
        String senderName = "Digital Booking Team";
        String verifyURL = siteURL + "/perfil";

        if (reserva.getComentarios() == null || reserva.getComentarios().isEmpty()) {
            reserva.setComentarios("Sin comentarios extras");
        }

        String mailContent = "<p style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#3d4852;font-size:16px;line-height:1.5em;margin-top:0;text-align:left\"><b>¡" + reserva.getNombreReserva() + "!<b></p>";
        mailContent += "<br><p  style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#3d4852;font-size:16px;line-height:1.5em;margin-top:0;text-align:left\">Tu reserva en " + productoDatos.getName() + " fue confirmada.</p>";
        mailContent += "<br>" + EmailReserva.message(reserva, verifyURL, productoDatos);
        mailContent += "<br><p  style=\"font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';box-sizing:border-box;color:#3d4852;font-size:16px;line-height:1.5em;margin-top:0;text-align:left\">¡Gracias por confiar en nosotros!<br><br><b>The Digital Booking Team<b></p>";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("help.digitalbooking@gmail.com", senderName);
        helper.setTo(reserva.getEmailReserva());
        helper.setSubject(subject);
        helper.setText(mailContent, true);

        mailSender.send(message);
    }
}
