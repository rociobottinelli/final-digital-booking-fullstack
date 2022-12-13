package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICaracteristicaRepository extends JpaRepository<Caracteristica,Integer> {

    @Query(value = "SELECT c FROM Caracteristica c ORDER BY c.id")
    List<Caracteristica>findAll();
}
