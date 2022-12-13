package Digitalbooking.accommodations.controller;

import Digitalbooking.accommodations.dto.PuntuacionDTO;
import Digitalbooking.accommodations.service.impl.PuntuacionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/puntuaciones")
@Tag(name = "Score", description = "Operations related to score")
public class PuntuacionController {

    @Autowired
    private PuntuacionService puntuacionService;

    @Operation(summary = "Create a new score",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PostMapping()
    public ResponseEntity<PuntuacionDTO> create(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the score's data to be created")
            @RequestBody PuntuacionDTO puntuacionDTO){
        PuntuacionDTO newPuntuacionDTO = puntuacionService.create(puntuacionDTO);
        return new ResponseEntity<>(newPuntuacionDTO, HttpStatus.OK);
    }

    @Operation(summary = "Get list of scores")
    @GetMapping("/list")
    public  ResponseEntity<List<PuntuacionDTO>>findAll() {
        List<PuntuacionDTO> puntuacionDTOSet = puntuacionService.findAll();
        return new ResponseEntity<>(puntuacionDTOSet, HttpStatus.OK);
    }

    @Operation(summary = "Get list of scores by user id")
    @GetMapping("/usuario/{id_usuario}")
    public ResponseEntity<List<PuntuacionDTO>>findByUsuario(@PathVariable("id_usuario") Integer id_usuario){
        List<PuntuacionDTO>puntuacionDTOSet=puntuacionService.findByUsuario(id_usuario);
        return new ResponseEntity<>(puntuacionDTOSet,HttpStatus.OK);
    }
}
