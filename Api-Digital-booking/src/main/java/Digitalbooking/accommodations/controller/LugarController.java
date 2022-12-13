package Digitalbooking.accommodations.controller;

import Digitalbooking.accommodations.dto.LugarDTO;
import Digitalbooking.accommodations.exception.NotFoundException;
import Digitalbooking.accommodations.service.impl.LugarService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Transactional
@RequestMapping("/lugares")
@Tag(name = "Places", description = "Operations related to places")
public class LugarController {

    @Autowired
    private LugarService lugarService;

    @Operation(summary = "Get place by id")
    @GetMapping("/{id}")
    public ResponseEntity<LugarDTO> findById(@PathVariable("id") Integer id){
        LugarDTO lugarDTO=lugarService.findById(id);
        if(lugarDTO==null){
            throw new NotFoundException("Lugar no encontrado con el id: " + id);
        }else{
            return new ResponseEntity<>(lugarDTO, HttpStatus.OK);
        }
    }

    @Operation(summary = "Create a new place",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PostMapping()
    public ResponseEntity<LugarDTO>create(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the place's data to be created")
            @RequestBody LugarDTO lugarDTO){
        LugarDTO newLugarDTO = lugarService.create(lugarDTO);
        return new ResponseEntity<>(newLugarDTO, HttpStatus.OK);
    }

    @Operation(summary = "Get list of places")
    @GetMapping("/list")
    public ResponseEntity<List<LugarDTO>>findAll(){
        List<LugarDTO>lugarDTOSet=lugarService.findAll();
        return new ResponseEntity<>(lugarDTOSet,HttpStatus.OK);
    }

    @Operation(summary = "Get list of places by city name")
    @GetMapping("/ciudades/{ciudad}")
    public ResponseEntity<List<LugarDTO>>findByCity(@PathVariable("ciudad") String ciudad){
        List<LugarDTO>lugarDTOSet=lugarService.findByCity(ciudad);
        return new ResponseEntity<>(lugarDTOSet,HttpStatus.OK);
    }
}
