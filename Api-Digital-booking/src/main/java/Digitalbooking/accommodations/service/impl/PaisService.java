package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.PaisDTO;
import Digitalbooking.accommodations.entities.Pais;
import Digitalbooking.accommodations.repository.IPaisRepository;
import Digitalbooking.accommodations.service.IPaisService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

public class PaisService implements IPaisService {

    @Autowired
    private IPaisRepository paisRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public PaisDTO findById(Integer id) {
        Optional<Pais> pais=paisRepository.findById(id);
        PaisDTO paisDTO = null;
        if(pais.isPresent())
            paisDTO=mapper.convertValue(pais,PaisDTO.class);
        return paisDTO;
    }

    @Override
    public PaisDTO create(PaisDTO paisDTO) {
        Pais pais = mapper.convertValue(paisDTO, Pais.class);
        Pais resPais= paisRepository.save(pais);
        return mapper.convertValue(resPais,PaisDTO.class);
    }

    @Override
    public void deleteById(Integer id) {
        paisRepository.deleteById(id);
    }

    @Override
    public PaisDTO update(PaisDTO paisDTO) {
        Pais pais = mapper.convertValue(paisDTO,Pais.class);
        Pais updatePais=paisRepository.save(pais);
        return mapper.convertValue(updatePais, PaisDTO.class);
    }

    @Override
    public List<PaisDTO> findAll() {
        List<Pais> paises=paisRepository.findAll();
        List<PaisDTO>paisesDTO= new ArrayList<>();
        for (Pais pais : paises){
            paisesDTO.add(mapper.convertValue(pais,PaisDTO.class));
        }
        return paisesDTO;
    }
}
