package com.freelancer.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.model.CV;
import com.freelancer.model.Categorie;
import com.freelancer.model.Project;
import com.freelancer.model.Proposition;
import com.freelancer.model.Utilisateurs;
import com.freelancer.repository.CategorieRepo;
import com.freelancer.repository.ProjectRepo;
import com.freelancer.repository.PropositionRepo;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.ProjectService;

import jakarta.transaction.Transactional;
@Service
public class ProjectServiceImpl implements ProjectService {
@Autowired
private PropositionRepo propositionRepo;
	@Autowired
	private ProjectRepo projectRepo;
	@Autowired
	private UtilisateursRepo utilisateursRepo;
	@Autowired
	private CategorieRepo categorieRepo;
	@Override
	public Project addNewProject(Project project) {
		Utilisateurs utilisateurs = utilisateursRepo.findById(project.getClient().getId()).get();
		Categorie categorie = categorieRepo.findById(project.getCategorieProjet().getId()).get();
		project.setClient(utilisateurs);
		project.setCreatedDate(new Date());
		project.setCategorieProjet(categorie);
 		return projectRepo.save(project);
	}

	@Override
	public List<Project> findByClient(Utilisateurs client) {
		// TODO Auto-generated method stub
		return projectRepo.findByClient(client);
	}

	@Override
	public List<Project> allProject() {
		// TODO Auto-generated method stub
		return projectRepo.findAll();
	}
	@Override
	  public List<Project> findProjectsForCv(CV cv) {
	        List<Proposition> propositions = propositionRepo.findByCvAndAccepterIsTrue(cv);
	        List<Project> projects = projectRepo.findAll();
	        
 	        for (Proposition proposition : propositions) {
	            projects.remove(proposition.getProject());
	        }
	        
	        return projects;
	    }
	@Override
	public Project findById(Long id) {
		// TODO Auto-generated method stub
		return projectRepo.findById(id).get();
	}

	@Override
	public List<Project> findByCategorieProjet(Categorie categorieProjet) {
 		return projectRepo.findByCategorieProjet(categorieProjet);
	}

	@Override
	 @Transactional
	    public void deleteProject(Long id) {
	        // Fetch the project by ID
	        Project project = projectRepo.findById(id).orElseThrow(() -> new RuntimeException("Project not found"));

	        // Fetch the list of propositions associated with the project
	        List<Proposition> listbyProject = propositionRepo.findByProject(project);

	        // Delete all propositions associated with the project
	        for (Proposition proposition : listbyProject) {
	            propositionRepo.delete(proposition);
	        }

	        // Finally, delete the project
	        projectRepo.deleteById(id);
	    }
 

}
