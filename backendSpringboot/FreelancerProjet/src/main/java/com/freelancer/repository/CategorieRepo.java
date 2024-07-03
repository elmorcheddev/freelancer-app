package com.freelancer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.model.Categorie;

public interface CategorieRepo extends JpaRepository<Categorie, Long>{
boolean existsByNomCat(String nomCat);
}
