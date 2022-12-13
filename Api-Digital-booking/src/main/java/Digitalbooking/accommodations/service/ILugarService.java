package Digitalbooking.accommodations.service;

import Digitalbooking.accommodations.dto.LugarDTO;

import java.util.List;

public interface ILugarService extends ICRUDService<LugarDTO>{

    List<LugarDTO> findByCity(String citie);
}
