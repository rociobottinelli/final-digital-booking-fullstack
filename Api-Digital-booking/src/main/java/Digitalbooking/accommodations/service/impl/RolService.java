package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.RolDTO;
import Digitalbooking.accommodations.entities.Rol;
import Digitalbooking.accommodations.repository.IRolRepository;
import Digitalbooking.accommodations.service.IRolService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

public class RolService implements IRolService {

    @Autowired
    private IRolRepository rolRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public RolDTO findById(Integer id) {
        Optional<Rol> rol = rolRepository.findById(id);
        RolDTO rolDTO = null;
        if(rol.isPresent())
            rolDTO = mapper.convertValue(rol,RolDTO.class);
        return rolDTO;
    }

    @Override
    public RolDTO create(RolDTO rolDTO) {
        Rol rol = mapper.convertValue(rolDTO, Rol.class);
        Rol resRol = rolRepository.save(rol);
        return mapper.convertValue(resRol,RolDTO.class);
    }

    @Override
    public void deleteById(Integer id) {
        rolRepository.deleteById(id);
    }

    @Override
    public RolDTO update(RolDTO rolDTO) {
        Rol rol = mapper.convertValue(rolDTO,Rol.class);
        Rol updateRol = rolRepository.save(rol);
        return mapper.convertValue(updateRol,RolDTO.class);
    }

    @Override
    public List<RolDTO> findAll() {
        List<Rol> roles = rolRepository.findAll();
        List<RolDTO> rolDTOS = new ArrayList<>();
        for (Rol rol : roles){
            rolDTOS.add(mapper.convertValue(rol,RolDTO.class));
        }
        return rolDTOS;
    }
}
