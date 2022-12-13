package Digitalbooking.accommodations.controller;

import Digitalbooking.accommodations.dto.ImagenDTO;
import Digitalbooking.accommodations.service.impl.ImagenService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/imagenes")
@Tag(name = "Images", description = "Operations related to images")
public class ImagenesController {

    @Autowired
    private ImagenService imagenService;

    @Operation(summary = "Create a new image",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping()
    public ResponseEntity<ImagenDTO>create(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the image's data to be created")
            @RequestBody ImagenDTO imagenDTO){
        ImagenDTO newImagenDTO=imagenService.create(imagenDTO);
        return new ResponseEntity<>(newImagenDTO, HttpStatus.OK);
    }

    @Operation(summary = "Get list of images")
    @GetMapping("/list")
    public  ResponseEntity<List<ImagenDTO>>findAll(){
        List<ImagenDTO>imagenDTOSet=imagenService.findAll();
        return new ResponseEntity<>(imagenDTOSet,HttpStatus.OK);
    }
}
