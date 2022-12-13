package Digitalbooking.accommodations.controller;

import Digitalbooking.accommodations.exception.NotFoundException;
import Digitalbooking.accommodations.dto.CategoriaDTO;
import Digitalbooking.accommodations.service.impl.CategoriaService;
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

import java.rmi.ServerException;
import java.util.List;

@RestController
@RequestMapping("/categorias")
@Tag(name = "Category", description = "Operations related to categories")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @Operation(summary = "Create a new category",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping()
    public ResponseEntity<CategoriaDTO> create(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the category's data to be created")
            @RequestBody CategoriaDTO categoriaDTO){
        CategoriaDTO newCategoriaDTO = categoriaService.create(categoriaDTO);
        return new ResponseEntity<>(newCategoriaDTO, HttpStatus.OK);
    }

    @Operation(summary = "Delete a new category",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteByid(@PathVariable("id") Integer id){
        categoriaService.deleteById(id);
        return new ResponseEntity<>("Categoria eliminada",HttpStatus.OK);
    }

    @Operation(summary = "Update a category",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<CategoriaDTO> update(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the category's data to be updated")
            @RequestBody CategoriaDTO categoriaDTO) throws ServerException{
        if(categoriaService.findById(categoriaDTO.getId())==null){
            throw new NotFoundException("Categoria no encontrada");
        }else {
        CategoriaDTO updateCategoria= categoriaService.update(categoriaDTO);
        return new ResponseEntity<>(updateCategoria, HttpStatus.OK);
        }
    }

    @Operation(summary = "Get list of categories")
    @GetMapping("/list")
    public ResponseEntity<List<CategoriaDTO>>findAll(){
        List<CategoriaDTO> categoriaDTOSet=categoriaService.findAll();
        return new ResponseEntity<>(categoriaDTOSet,HttpStatus.OK);
    }
}
