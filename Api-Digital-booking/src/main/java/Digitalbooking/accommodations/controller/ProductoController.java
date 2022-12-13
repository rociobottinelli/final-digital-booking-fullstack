package Digitalbooking.accommodations.controller;

import Digitalbooking.accommodations.exception.NotFoundException;
import Digitalbooking.accommodations.dto.ProductoDTO;
import Digitalbooking.accommodations.service.impl.ProductoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@Transactional
@RequestMapping("/productos")
@Tag(name = "Product", description = "Operations related to products")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

     @Operation(summary = "Get product by id")
     @GetMapping("/{id}")
     public ResponseEntity<ProductoDTO>findOneById(@PathVariable("id") Integer id){
        ProductoDTO productoDTO=productoService.findOneById(id);
        if(productoDTO==null){
            throw new NotFoundException("Producto no encontrado con el id: " + id);
        }else{
            return new ResponseEntity<>(productoDTO, HttpStatus.OK);
        }
    }

    @Operation(summary = "Create a new product",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping()
    public ResponseEntity<ProductoDTO>create(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the product's data to be created")
            @RequestBody ProductoDTO productoDTO){
         ProductoDTO newProductoDTO = productoService.create(productoDTO);
         return new ResponseEntity<>(newProductoDTO, HttpStatus.OK);
    }

    @Operation(summary = "Get list of bookings")
    @GetMapping("/list")
    public ResponseEntity<List<ProductoDTO>>findAll(){
        List<ProductoDTO>productoDTOSet=productoService.findAll();
         return new ResponseEntity<>(productoDTOSet,HttpStatus.OK);
    }

    @Operation(summary = "Update a product",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<ProductoDTO>update(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the booking's data to be updated")
            @RequestBody ProductoDTO productoDTO){
        ProductoDTO updateProductoDTO = productoService.update(productoDTO);
        return new ResponseEntity<>(updateProductoDTO, HttpStatus.OK);
    }

    @Operation(summary = "Get list random of products")
    @GetMapping("/page")
    public ResponseEntity<List<ProductoDTO>>findRandomProduct(){
        List<ProductoDTO>productoDTOSet=productoService.findRandomProduct();
        return new ResponseEntity<>(productoDTOSet,HttpStatus.OK);
    }

    @Operation(summary = "Get list of products by city name")
    @GetMapping("/ciudades/{ciudad}")
    public ResponseEntity<List<ProductoDTO>>findByCity(@PathVariable("ciudad") String ciudad){
        List<ProductoDTO>productoDTOSet=productoService.findByCity(ciudad);
        return new ResponseEntity<>(productoDTOSet,HttpStatus.OK);
    }

    @Operation(summary = "Get list of products by city name and between dates")
    @GetMapping("/{ciudadName}/{fechaInicio}/{fechaFin}")
    public ResponseEntity<List<ProductoDTO>>findByCityAndBetweenDates(@PathVariable("fechaInicio") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaInicio,
                                                                     @PathVariable("fechaFin") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fechaFin,
                                                                     @PathVariable("ciudadName") String ciudadName) {
        List<ProductoDTO>productoDTOSet = productoService.findByCityAndBetweenDates(ciudadName, fechaInicio, fechaFin);
         if (productoDTOSet.isEmpty()){
             throw new NotFoundException("No se encontraron alojamientos disponibles en la ciudad " + ciudadName + " para la fecha de inicio " + fechaInicio + " y fecha fin " + fechaFin + ".");
         }
         return new ResponseEntity<>(productoDTOSet, HttpStatus.OK);
    }
}
