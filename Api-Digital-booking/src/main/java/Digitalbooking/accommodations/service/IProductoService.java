package Digitalbooking.accommodations.service;

import Digitalbooking.accommodations.dto.ProductoDTO;

import java.time.LocalDate;
import java.util.List;

public interface IProductoService extends ICRUDService<ProductoDTO>{

    List<ProductoDTO> findByCity(String citie);

    List<ProductoDTO> findRandomProduct();

    ProductoDTO findOneById(Integer id);

    List<ProductoDTO> findByCityAndBetweenDates(String ciudadName, LocalDate fechaInicio, LocalDate fechaFin);
}
