package com.freelancer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.model.Categorie;
import com.freelancer.model.Project;
import com.freelancer.model.Utilisateurs;

public interface ProjectRepo extends JpaRepository<Project, Long>{

List<Project> findByClient(Utilisateurs client);
List<Project> findByCategorieProjet(Categorie categorieProjet);
 
}
