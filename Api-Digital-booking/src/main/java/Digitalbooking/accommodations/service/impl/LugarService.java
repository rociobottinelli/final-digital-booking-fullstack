package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.LugarDTO;
import Digitalbooking.accommodations.entities.Lugar;
import Digitalbooking.accommodations.repository.ILugarRepository;
import Digitalbooking.accommodations.service.ILugarService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LugarService implements ILugarService {

    @Autowired
    private ILugarRepository lugarRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public LugarDTO findById(Integer id) {
        Optional<Lugar> lugar=lugarRepository.findById(id);
        LugarDTO lugarDTO = null;
        if(lugar.isPresent())
            lugarDTO=mapper.convertValue(lugar,LugarDTO.class);
        return lugarDTO;
    }

    @Override
    public LugarDTO create(LugarDTO lugarDTO) {
        Lugar lugar = lugarRepository.save(lugarDTO.toEntity());
        return lugar.toDto();
    }

    @Override
    public void deleteById(Integer id) {

    }

    @Override
    public LugarDTO update(LugarDTO lugarDTO) {
        return null;
    }

    @Override
    public List<LugarDTO> findAll() {
        List<Lugar> lugares=lugarRepository.findAll();
        List<LugarDTO>lugaresDTO= new ArrayList<>();
        for (Lugar lugar : lugares){
            lugaresDTO.add(lugar.toDto());
        }
        return lugaresDTO;
    }

    @Override
    public List<LugarDTO> findByCity(String citie) {
        List<Lugar>lugares=lugarRepository.findAll();
        List<LugarDTO>lugaresDTO= new ArrayList<>();
        for (Lugar lugar : lugares){
            if (lugar.getCiudad().getCity().equals(citie))
            lugaresDTO.add(lugar.toDto());
        }
        return lugaresDTO;
    }
}
