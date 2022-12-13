package Digitalbooking.accommodations.service;

import java.util.List;

public interface ICRUDService<T> {

    T findById(Integer id);
    T create(T t);
    void deleteById(Integer id);
    T update(T t);
    List<T> findAll();
}
