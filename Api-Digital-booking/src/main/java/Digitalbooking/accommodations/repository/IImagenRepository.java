package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IImagenRepository extends JpaRepository<Imagen,Integer> {

    @Query(value = "SELECT i FROM Imagen i ORDER BY i.id")
    List<Imagen> findAll();
}
