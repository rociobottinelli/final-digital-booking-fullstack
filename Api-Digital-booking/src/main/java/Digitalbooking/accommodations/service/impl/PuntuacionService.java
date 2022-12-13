package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.PuntuacionDTO;
import Digitalbooking.accommodations.entities.Puntuacion;
import Digitalbooking.accommodations.entities.Reserva;
import Digitalbooking.accommodations.exception.NotFoundException;
import Digitalbooking.accommodations.repository.IPuntuacionRepository;
import Digitalbooking.accommodations.repository.IReservaRepository;
import Digitalbooking.accommodations.service.IPuntuacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PuntuacionService implements IPuntuacionService {

    @Autowired
    private IPuntuacionRepository puntuacionRepository;

    @Autowired
    private IReservaRepository reservaRepository;

    @Override
    public PuntuacionDTO findById(Integer id) {
        return null;
    }

    @Override
    public PuntuacionDTO create(PuntuacionDTO puntuacionDTO) {
        List<Reserva> reservaU = reservaRepository.findReservationByUserId(puntuacionDTO.getUsuario().getId());
        for (Reserva reservaUsuario : reservaU) {
            if (reservaUsuario.getProducto().getId().equals(puntuacionDTO.getProductos().getId()) && reservaUsuario.getUsuario().getId().equals(puntuacionDTO.getUsuario().getId())) {
                Puntuacion puntuacion = puntuacionRepository.save(puntuacionDTO.toEntity());
                return puntuacion.toDto();
            }
        }
        throw new NotFoundException("No se puede realizar una puntuación sin tener una reserva en el alojamiento seleccionado");
    }

    @Override
    public void deleteById(Integer id) {
        puntuacionRepository.deleteById(id);
    }

    @Override
    public PuntuacionDTO update(PuntuacionDTO puntuacionDTO) {
        List<Reserva> reservaU = reservaRepository.findReservationByUserId(puntuacionDTO.getUsuario().getId());
        for (Reserva reservaUsuario : reservaU) {
            if (reservaUsuario.getProducto().getId().equals(puntuacionDTO.getProductos().getId()) && reservaUsuario.getUsuario().getId().equals(puntuacionDTO.getUsuario().getId())) {
                Puntuacion puntuacion = puntuacionRepository.save(puntuacionDTO.toEntity());
                return puntuacion.toDto();
            }
        }
        throw new NotFoundException("No se puede realizar una puntuación sin tener una reserva en el alojamiento seleccionado");
    }

    @Override
    public List<PuntuacionDTO> findAll() {
        List<Puntuacion>puntuaciones=puntuacionRepository.findAll();
        List<PuntuacionDTO>puntuacionesDTO= new ArrayList<>();
        for (Puntuacion puntuacion : puntuaciones){
            if (puntuacion.getPuntuacion() == null)
                puntuacion.setPuntuacion(0.0);
            puntuacionesDTO.add(puntuacion.toDto());
        }
        return puntuacionesDTO;
    }

    @Override
    public List<PuntuacionDTO> findByUsuario(Integer id_usuario) {
        List<Puntuacion>puntuaciones= puntuacionRepository.findAll();
        List<PuntuacionDTO>puntuacionesDTO= new ArrayList<>();
        for (Puntuacion puntuacion : puntuaciones){
            if (puntuacion.getUsuario().getId().equals(id_usuario))
                puntuacionesDTO.add(puntuacion.toDto());
        }
        return puntuacionesDTO;
    }
}
