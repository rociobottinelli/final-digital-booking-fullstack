package Digitalbooking.accommodations.entities;

import Digitalbooking.accommodations.dto.FavoritoDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name= "favoritos")
public class Favorito {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    @JsonIgnore
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    @JsonIgnore
    private Usuario usuario;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Favorito favorito = (Favorito) o;
        return Objects.equals(id, favorito.id);
    }

    public FavoritoDTO toDTO() {
        FavoritoDTO favoritoDTO = new FavoritoDTO();
        favoritoDTO.setId(id);
        favoritoDTO.setUsuario(usuario);
        favoritoDTO.setProducto(producto);
        return favoritoDTO;
    }
}
