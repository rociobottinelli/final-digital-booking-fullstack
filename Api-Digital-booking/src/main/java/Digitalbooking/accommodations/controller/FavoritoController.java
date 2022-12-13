package Digitalbooking.accommodations.controller;

import Digitalbooking.accommodations.dto.FavoritoDTO;
import Digitalbooking.accommodations.service.impl.FavoritoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/favoritos")
@Tag(name = "Favorites", description = "Operations related to favorites")
public class FavoritoController {

    @Autowired
    private FavoritoService favoritoService;

    @Operation(summary = "Mark new favorite",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PostMapping("/agregar")
    public ResponseEntity<FavoritoDTO> create(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the favorite's data to be created")
            @RequestBody FavoritoDTO favoritoDTO){
        FavoritoDTO newFavorito = favoritoService.create(favoritoDTO);
        return new ResponseEntity<>(newFavorito, HttpStatus.OK);
    }

    @Operation(summary = "Delete favorite",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id){
        favoritoService.deleteById(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @Operation(summary = "Delete favorite by product id",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @DeleteMapping("/{id_producto}/{id_usuario}")
    public ResponseEntity<?> deleteByProductId(@PathVariable Integer id_producto, @PathVariable Integer id_usuario){
        favoritoService.deleteByProductId(id_producto, id_usuario);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @Operation(summary = "Get list of favorites by user id")
    @GetMapping("/usuario/{id_usuario}")
    public ResponseEntity<List<FavoritoDTO>>findByUsuario(@PathVariable("id_usuario") Integer id_usuario){
        List<FavoritoDTO>favoritoDTOSet=favoritoService.findByUsuario(id_usuario);
        return new ResponseEntity<>(favoritoDTOSet,HttpStatus.OK);
    }

    @Operation(summary = "Get list of favorites")
    @GetMapping("/list")
    public ResponseEntity<Collection<FavoritoDTO>> findAll() {
        return ResponseEntity.ok(favoritoService.findAll());
    }
}
