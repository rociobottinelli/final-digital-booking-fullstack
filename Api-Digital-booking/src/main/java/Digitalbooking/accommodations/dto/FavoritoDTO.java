package Digitalbooking.accommodations.dto;

import Digitalbooking.accommodations.entities.Favorito;
import Digitalbooking.accommodations.entities.Producto;
import Digitalbooking.accommodations.entities.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FavoritoDTO {

    private Integer id;
    private Producto producto;
    private Usuario usuario;

    public Favorito toEntity() {
        Favorito favorito = new Favorito();
        favorito.setId(id);
        favorito.setUsuario(usuario);
        favorito.setProducto(producto);
        return favorito;
    }
}
