package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICategoriaRepository extends JpaRepository<Categoria,Integer> {

    @Procedure(procedureName = "CountProductByCategory")
    List<Categoria> CountProductByCategory();

    @Query(value = "SELECT c FROM Categoria c ORDER BY c.id")
    List<Categoria>findAll();
}
