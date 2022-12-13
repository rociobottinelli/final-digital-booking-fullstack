package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.FavoritoDTO;
import Digitalbooking.accommodations.entities.Favorito;
import Digitalbooking.accommodations.repository.IFavoritoRepository;
import Digitalbooking.accommodations.service.IFavoritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FavoritoService implements IFavoritoService {

    @Autowired
    private IFavoritoRepository favoritoRepository;

    @Override
    public FavoritoDTO create(FavoritoDTO favoritoDTO) {
        Favorito favorito = favoritoRepository.save(favoritoDTO.toEntity());
        return favorito.toDTO();
    }

    @Override
    public void deleteById(Integer id) {
        favoritoRepository.deleteById(id);
    }

    @Override
    public void deleteByProductId(Integer id_producto, Integer id_usuario) {
        List<Favorito>favoritos= favoritoRepository.findAll();
        for (Favorito favorito : favoritos){
            if (favorito.getProducto().getId().equals(id_producto) && favorito.getUsuario().getId().equals(id_usuario))
                favoritoRepository.deleteById(favorito.getId());
        }
    }

    @Override
    public List<FavoritoDTO> findAll() {
        List<Favorito>favoritos= favoritoRepository.findAll();
        List<FavoritoDTO>favoritosDTO= new ArrayList<>();
        for (Favorito favorito : favoritos){
            favoritosDTO.add(favorito.toDTO());
        }
        return favoritosDTO;
    }

    @Override
    public FavoritoDTO update(FavoritoDTO favoritoDTO) {
        return null;
    }

    @Override
    public FavoritoDTO findById(Integer id) {
        return null;
    }

    @Override
    public List<FavoritoDTO> findByUsuario(Integer id_usuario) {
        List<Favorito>favoritos= favoritoRepository.findAll();
        List<FavoritoDTO>favoritosDTO= new ArrayList<>();
        for (Favorito favorito : favoritos){
            if (favorito.getUsuario().getId().equals(id_usuario))
                favoritosDTO.add(favorito.toDTO());
        }
        return favoritosDTO;
    }
}
