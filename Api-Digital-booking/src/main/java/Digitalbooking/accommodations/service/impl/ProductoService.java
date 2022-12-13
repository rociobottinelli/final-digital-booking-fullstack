package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.ProductoDTO;
import Digitalbooking.accommodations.entities.Producto;
import Digitalbooking.accommodations.repository.IProductoRepository;
import Digitalbooking.accommodations.service.IProductoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class ProductoService implements IProductoService {

    @Autowired
    private IProductoRepository productoRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public ProductoDTO findById(Integer id) {
        Optional<Producto>producto=productoRepository.findById(id);
        ProductoDTO productoDTO = null;
        if(producto.isPresent())
            productoDTO=mapper.convertValue(producto,ProductoDTO.class);
        return productoDTO;
    }

    @Override
    public ProductoDTO create(ProductoDTO productoDTO) {
        Producto producto = productoRepository.save(productoDTO.toEntity());
        if (producto.getPuntuacion() == null)
            producto.setPuntuacion(0.0);
        return producto.toDto();
    }

    @Override
    public void deleteById(Integer id) {
        productoRepository.deleteById(id);
    }

    @Override
    public ProductoDTO update(ProductoDTO productoDTO) {
        Producto productToModified = productoRepository.findOneById(productoDTO.getId());
        Producto producto = productoDTO.toEntity();
        if (productoDTO.getReservas() == null || productoDTO.getPuntuacion() == null) {
            producto.setPuntuacion(productToModified.getPuntuacion());
            producto.setReservas(productToModified.getReservas());
            Producto newProduct = productoRepository.save(producto);
            return newProduct.toDto();
        }
        Producto newProduct = productoRepository.save(producto);
        return newProduct.toDto();
    }

    public List<ProductoDTO> findByCity(String citie) {
        List<Producto>productos=productoRepository.findAllProductByScore();
        List<ProductoDTO>productosDTO= new ArrayList<>();
        for (Producto producto : productos){
            if (producto.getCiudad().getCity().equals(citie))
                if (producto.getPuntuacion() == null)
                    producto.setPuntuacion(0.0);
                productosDTO.add(producto.toDto());
        }
        return productosDTO;
    }

    public List<ProductoDTO> findRandomProduct() {
        productoRepository.findAllProductByScore();
        List<Producto>productos=productoRepository.findRandomProduct();
        List<ProductoDTO>productosDTO= new ArrayList<>();
        for (Producto producto : productos){
            if (producto.getPuntuacion() == null)
                producto.setPuntuacion(0.0);
            productosDTO.add(producto.toDto());
        }
        return productosDTO;
    }

    @Override
    public ProductoDTO findOneById(Integer id) {
        productoRepository.findAllProductByScore();
        Producto producto=productoRepository.findOneById(id);
        if (producto.getPuntuacion() == null)
            producto.setPuntuacion(0.0);
        return producto.toDto();
    }

    public List<ProductoDTO> findByCityAndBetweenDates(String ciudadName, LocalDate fechaInicio, LocalDate fechaFin) {
        productoRepository.findAllProductByScore();
        List<Producto> productos = productoRepository.findByCityAndBetweenDates(ciudadName, fechaInicio, fechaFin);
        List<ProductoDTO>productosDTO= new ArrayList<>();
        for (Producto producto : productos){
            if (producto.getPuntuacion() == null)
                producto.setPuntuacion(0.0);
            productosDTO.add(producto.toDto());
        }
        return productosDTO;
    }

    @Override
    public List<ProductoDTO> findAll() {
        List<Producto>productos=productoRepository.findAllProductByScore();
        List<ProductoDTO>productosDTO= new ArrayList<>();
        for (Producto producto : productos){
            if (producto.getPuntuacion() == null)
                producto.setPuntuacion(0.0);
            productosDTO.add(producto.toDto());
        }
        return productosDTO;
    }
}


