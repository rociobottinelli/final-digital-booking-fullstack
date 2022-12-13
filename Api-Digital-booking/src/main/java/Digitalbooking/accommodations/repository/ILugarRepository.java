package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Lugar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ILugarRepository extends JpaRepository<Lugar,Integer> {

    @Query(value = "SELECT l FROM Lugar l ORDER BY l.id")
    List<Lugar> findAll();
}
