package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Puntuacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPuntuacionRepository extends JpaRepository<Puntuacion, Integer> {

    @Query(value = "SELECT p FROM Puntuacion p ORDER BY p.id")
    List<Puntuacion> findAll();
}
