package Digitalbooking.accommodations.service;

import Digitalbooking.accommodations.dto.PuntuacionDTO;

import java.util.List;

public interface IPuntuacionService extends ICRUDService<PuntuacionDTO>{

    List<PuntuacionDTO> findByUsuario(Integer id_usuario);
}
