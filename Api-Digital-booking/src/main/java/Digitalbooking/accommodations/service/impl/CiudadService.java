package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.CiudadDTO;
import Digitalbooking.accommodations.entities.Ciudad;
import Digitalbooking.accommodations.repository.ICiudadRepository;
import Digitalbooking.accommodations.service.ICiudadService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CiudadService implements ICiudadService {

    @Autowired
    private ICiudadRepository ciudadRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public CiudadDTO findById(Integer id) {
        Optional<Ciudad> ciudad = ciudadRepository.findById(id);
        CiudadDTO ciudadDTO = null;
        if(ciudad.isPresent())
            ciudadDTO =mapper.convertValue(ciudad, CiudadDTO.class);
        return ciudadDTO;
    }

    @Override
    public CiudadDTO create(CiudadDTO ciudadDTO) {
        Ciudad ciudad = mapper.convertValue(ciudadDTO, Ciudad.class);
        Ciudad resCiudad=ciudadRepository.save(ciudad);
        return mapper.convertValue(resCiudad,CiudadDTO.class);
    }

    @Override
    public void deleteById(Integer id) {
        ciudadRepository.deleteById(id);
    }

    @Override
    public CiudadDTO update(CiudadDTO ciudadDTO) {
        Ciudad ciudad = mapper.convertValue(ciudadDTO, Ciudad.class);
        Ciudad updateCiudad=ciudadRepository.save(ciudad);
        return mapper.convertValue(updateCiudad,CiudadDTO.class);
    }

    @Override
    public List<CiudadDTO> findAll() {
        List<Ciudad> ciudades = ciudadRepository.findAll();
        List<CiudadDTO> ciudadesDTO = new ArrayList<>();
        for(Ciudad ciudad : ciudades){
            ciudadesDTO.add(mapper.convertValue(ciudad, CiudadDTO.class));
        }
        return ciudadesDTO;
    }
}
