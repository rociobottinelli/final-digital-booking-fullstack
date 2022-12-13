package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICiudadRepository extends JpaRepository<Ciudad,Integer> {

    @Query(value = "SELECT c FROM Ciudad c ORDER BY c.id")
    List<Ciudad> findAll();
}
