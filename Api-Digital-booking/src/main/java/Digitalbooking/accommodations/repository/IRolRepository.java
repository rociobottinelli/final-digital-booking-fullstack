package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IRolRepository extends JpaRepository<Rol,Integer> {

    @Query(value = "SELECT r FROM Rol r ORDER BY r.id")
    List<Rol> findAll();
}
