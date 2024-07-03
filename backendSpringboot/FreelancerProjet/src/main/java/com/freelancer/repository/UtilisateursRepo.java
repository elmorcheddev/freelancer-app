package com.freelancer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.freelancer.model.Categorie;
import com.freelancer.model.Roles;
import com.freelancer.model.Utilisateurs;
import java.util.List;


public interface UtilisateursRepo extends JpaRepository<Utilisateurs, Long> {
	
	Utilisateurs findByEmail(String email);
	List<Utilisateurs> findByCategorieFreelancer(Categorie categorieFreelancer);
	boolean existsByEmail(String email);
	 @Query("SELECT u FROM Utilisateurs u JOIN u.roles r WHERE r.nomRole = :roleName")
	    List<Utilisateurs> findByRoleName(@Param("roleName") String roleName);
}
