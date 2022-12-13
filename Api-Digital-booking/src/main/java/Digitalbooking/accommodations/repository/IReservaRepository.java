package Digitalbooking.accommodations.repository;

import Digitalbooking.accommodations.entities.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IReservaRepository extends JpaRepository<Reserva,Integer> {

    @Query(value = "SELECT r FROM Reserva r WHERE r.producto.id = ?1")
    List<Reserva> findReservationByProductId(Integer id);

    @Query(value = "SELECT r FROM Reserva r WHERE r.usuario.id = ?1")
    List<Reserva> findReservationByUserId(Integer id);

    @Query(value = "SELECT r FROM Reserva r WHERE r.id = ?1")
    Reserva findOneById(Integer id);

    @Query(value = "SELECT r FROM Reserva r ORDER BY r.id")
    List<Reserva>findAll();
}
