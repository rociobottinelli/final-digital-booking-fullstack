package Digitalbooking.accommodations.service;

import Digitalbooking.accommodations.dto.ReservaDTO;

import java.util.List;

public interface IReservaService extends ICRUDService<ReservaDTO>{

    List<ReservaDTO> findReservationByProductId(Integer id);

    List<ReservaDTO> findReservationByUserId(Integer id);

    ReservaDTO findOneById(Integer id);
}
