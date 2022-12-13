package Digitalbooking.accommodations.controller;

import Digitalbooking.accommodations.dto.CiudadDTO;
import Digitalbooking.accommodations.service.impl.CiudadService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ciudades")
@Tag(name = "City", description = "Operations related to cities")
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;

    @Operation(summary = "Get list of cities")
    @GetMapping("/list")
    public ResponseEntity<List<CiudadDTO>>findAll(){
        List<CiudadDTO>ciudadDTOSet=ciudadService.findAll();
        return new ResponseEntity<>(ciudadDTOSet,HttpStatus.OK);
    }
}
