package Digitalbooking.accommodations.service.impl;

import Digitalbooking.accommodations.dto.ImagenDTO;
import Digitalbooking.accommodations.entities.Imagen;
import Digitalbooking.accommodations.repository.IImagenRepository;
import Digitalbooking.accommodations.service.IImagenService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ImagenService implements IImagenService {
    @Autowired
    private IImagenRepository imagenRepository;

    @Autowired
    private ObjectMapper mapper;

    @Override
    public ImagenDTO findById(Integer id) {
        Optional<Imagen> imagen = imagenRepository.findById(id);
        ImagenDTO imagenDTO=null;
        if(imagen.isPresent())
            imagenDTO=mapper.convertValue(imagen,ImagenDTO.class);
        return imagenDTO;
    }

    @Override
    public ImagenDTO create(ImagenDTO imagenDTO) {
        Imagen imagen = mapper.convertValue(imagenDTO, Imagen.class);
        Imagen resImagen=imagenRepository.save(imagen);
        return mapper.convertValue(resImagen,ImagenDTO.class);
    }

    @Override
    public void deleteById(Integer id) {
        imagenRepository.deleteById(id);
    }

    @Override
    public ImagenDTO update(ImagenDTO imagenDTO) {
        Imagen imagen = mapper.convertValue(imagenDTO,Imagen.class);
        Imagen updateImagen=imagenRepository.save(imagen);
        return mapper.convertValue(updateImagen,ImagenDTO.class);
    }

    @Override
    public List<ImagenDTO> findAll() {
        List<Imagen> imagenes = imagenRepository.findAll();
        List<ImagenDTO>imagenDTOS=new ArrayList<>();
        for (Imagen imagen : imagenes){
            imagenDTOS.add(mapper.convertValue(imagen,ImagenDTO.class));
        }
        return imagenDTOS;
    }
}
