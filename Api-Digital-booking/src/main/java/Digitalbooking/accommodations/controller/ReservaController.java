package Digitalbooking.accommodations.controller;

import Digitalbooking.accommodations.exception.BadRequestException;
import Digitalbooking.accommodations.dto.ProductoDTO;
import Digitalbooking.accommodations.dto.ReservaDTO;
import Digitalbooking.accommodations.exception.NotFoundException;
import Digitalbooking.accommodations.service.impl.ProductoService;
import Digitalbooking.accommodations.service.impl.ReservaService;
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

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;

@Transactional
@RestController
@RequestMapping("/reservas")
@Tag(name = "Booking", description = "Operations related to bookings")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @Autowired
    private ProductoService productoService;

    @Operation(summary = "Create a new booking",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PostMapping()
    public ResponseEntity<ReservaDTO> create(
            @io.swagger.v3.oas.annotations.parameters.RequestBody(description = "Object with the booking's data to be created")
            @RequestBody ReservaDTO reservaDTO) {
        ReservaDTO newReservaDTO=reservaService.create(reservaDTO);
        return new ResponseEntity<>(newReservaDTO, HttpStatus.OK);
    }

    @Operation(summary = "Send email booking",
            parameters = @Parameter(name = "Authorization", in = ParameterIn.HEADER, description = "JWT token required", required = true),
            security = @SecurityRequirement(name = "bearerAuth"))
    @PostMapping("/{id}")
    public ResponseEntity<ReservaDTO> sendReservationEmail(@PathVariable Integer id) throws MessagingException, UnsupportedEncodingException {
        ReservaDTO newReservaDTO=reservaService.findOneById(id);
        if (newReservaDTO.getSendEmail()){
            throw new BadRequestException("Email de confirmación de reserva ya enviado");
        } else {
            String URL = System.getenv().get("APP_HOST_FRONT");
            ProductoDTO productoDatos = productoService.findOneById(newReservaDTO.getProducto().getId());
            reservaService.sendReservationEmail(newReservaDTO, URL, productoDatos);
            newReservaDTO.setSendEmail(true);
            reservaService.update(newReservaDTO);
            return new ResponseEntity<>(newReservaDTO, HttpStatus.OK);
        }
    }

    @Operation(summary = "Get list of bookings")
    @GetMapping("/list")
    public  ResponseEntity<List<ReservaDTO>>findAll(){
        List<ReservaDTO>reservaDTOSet=reservaService.findAll();
        return new ResponseEntity<>(reservaDTOSet,HttpStatus.OK);
    }

    @Operation(summary = "Get list of bookings by product id")
    @GetMapping("/productos/{id}")
    public ResponseEntity<List<ReservaDTO>>findReservationByProductId(@PathVariable Integer id) {
        List<ReservaDTO>reservaDTO=reservaService.findReservationByProductId(id);
        if(reservaDTO==null){
            throw new NotFoundException("No existen reservas para el producto con id: " + id);
        }else{
            return new ResponseEntity<>(reservaDTO, HttpStatus.OK);
        }
    }

    @Operation(summary = "Get list of bookings by user id")
    @GetMapping("/usuarios/{id}")
    public ResponseEntity<List<ReservaDTO>>findReservationByUserId(@PathVariable Integer id) {
        List<ReservaDTO>reservaDTO=reservaService.findReservationByUserId(id);
        if(reservaDTO==null){
            throw new NotFoundException("No existen reservas para el usuario con id: " + id);
        }else{
            return new ResponseEntity<>(reservaDTO, HttpStatus.OK);
        }
    }

    @Operation(summary = "Get booking by id")
    @GetMapping("/{id}")
    public ResponseEntity<ReservaDTO>findOneById(@PathVariable("id") Integer id){
        ReservaDTO reservaDTO=reservaService.findOneById(id);
        if(reservaDTO==null){
            throw new NotFoundException("No existen reservas con el id: " + id);
        }else{
            return new ResponseEntity<>(reservaDTO, HttpStatus.OK);
        }
    }
}
