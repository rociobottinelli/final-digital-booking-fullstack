package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Pais;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPaisRepository extends JpaRepository<Pais,Integer> {

    @Query(value = "SELECT p FROM Pais p ORDER BY p.id")
    List<Pais> findAll();
}
