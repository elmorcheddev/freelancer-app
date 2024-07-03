package com.freelancer.service;

import java.util.List;

import com.freelancer.model.CV;
import com.freelancer.model.Categorie;
import com.freelancer.model.Project;
import com.freelancer.model.Utilisateurs;

public interface ProjectService {

	Project addNewProject(Project project);
	List<Project> findByClient(Utilisateurs client);
	List<Project> allProject();
	Project findById(Long id);
	List<Project> findByCategorieProjet(Categorie categorieProjet);
	void deleteProject(Long id);
 	List<Project> findProjectsForCv(CV cv);
}
