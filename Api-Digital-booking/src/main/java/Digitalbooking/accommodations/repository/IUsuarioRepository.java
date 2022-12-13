package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario,Integer> {

    @Query("SELECT u FROM Usuario u WHERE u.email LIKE ?1")
    Optional<Usuario> findByEmail(String email);

    Boolean existsByEmail(String email);

    @Query("SELECT u FROM Usuario u WHERE u.verificationCode = ?1")
    Usuario findByVerificationCode(String code);

    @Query(value = "SELECT u FROM Usuario u WHERE u.id = ?1")
    Usuario findOneById(Integer id);

    @Query(value = "SELECT u FROM Usuario u ORDER BY u.id")
    List<Usuario> findAll();
}
