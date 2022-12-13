package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.CategoriaDTO;
import Digitalbooking.accommodations.entities.Categoria;
import Digitalbooking.accommodations.repository.ICategoriaRepository;
import Digitalbooking.accommodations.service.ICategoriaService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Transactional
@Service
public class CategoriaService implements ICategoriaService {

    @Autowired
    private ICategoriaRepository categoriaRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public CategoriaDTO findById(Integer id) {
        categoriaRepository.CountProductByCategory();
        Optional<Categoria>categoria = categoriaRepository.findById(id);
        CategoriaDTO categoriaDTO = null;
        if(categoria.isPresent())
            categoriaDTO =mapper.convertValue(categoria, CategoriaDTO.class);
        return categoriaDTO;
    }

    @Override
    public CategoriaDTO create(CategoriaDTO categoriaDTO) {
        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);
        Categoria resCategoria=categoriaRepository.save(categoria);
        return mapper.convertValue(resCategoria,CategoriaDTO.class);
    }

    @Override
    public void deleteById(Integer id) {
        categoriaRepository.deleteById(id);
    }

    @Override
    public CategoriaDTO update(CategoriaDTO categoriaDTO) {
        Categoria categoria = mapper.convertValue(categoriaDTO, Categoria.class);
        Categoria updateCategoria=categoriaRepository.save(categoria);
        return mapper.convertValue(updateCategoria,CategoriaDTO.class);
    }

    @Override
    public List<CategoriaDTO> findAll() {
        List<Categoria> categorias = categoriaRepository.CountProductByCategory();
        List<CategoriaDTO> categoriasDTO = new ArrayList<>();
        for(Categoria categoria : categorias){
           categoriasDTO.add(mapper.convertValue(categoria, CategoriaDTO.class));
        }
        return categoriasDTO;
    }
}
