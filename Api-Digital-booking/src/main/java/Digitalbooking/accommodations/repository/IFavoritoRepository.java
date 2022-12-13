package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Favorito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IFavoritoRepository extends JpaRepository<Favorito, Integer> {

    @Query(value = "SELECT f FROM Favorito f ORDER BY f.id")
    List<Favorito> findAll();
}
