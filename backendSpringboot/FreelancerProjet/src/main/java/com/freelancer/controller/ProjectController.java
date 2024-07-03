package com.freelancer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freelancer.model.CV;
import com.freelancer.model.Categorie;
import com.freelancer.model.Project;
import com.freelancer.model.Utilisateurs;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.CategorieService;
import com.freelancer.service.CvService;
import com.freelancer.service.ProjectService;
import com.freelancer.service.UtilisateurServices;

@RestController
@RequestMapping(value = "/api/project")

public class ProjectController {
	@Autowired
	private CategorieService categorieService;
	@Autowired
	private CvService cvService;
	@Autowired
	private ProjectService projectService;
	@Autowired
	private UtilisateursRepo utilisateurServices;
	@PostMapping(value = "/add")
	public Project addNewProject(@RequestBody Project  project) {
		return projectService.addNewProject(project);
	}
	@GetMapping(value = "/byClient/{id}")
	public List<Project> findByClient(@PathVariable Long id) {
		Utilisateurs client=utilisateurServices.findById(id).get();
		return projectService.findByClient(client);
	}
	@GetMapping(value = "/byCat/{id}")
	public List<Project> findByCategorieProjet(@PathVariable Long id) {
		Categorie  categorieProjet= categorieService.findbyIdCategorie(id);
 		return projectService.findByCategorieProjet(categorieProjet);
	}
	@GetMapping(value = "/forFreelancer/{id}")
	public List<Project> findProjectsForFreelancer(@PathVariable Long id) {
	    CV cv = cvService.findByIdCv(id);
	    return projectService.findProjectsForCv(cv);
	}
	@DeleteMapping(value = "/deletePrj/{id}")
	public void deleteProjet(@PathVariable Long id) {
		projectService.deleteProject(id);
	}
	@GetMapping(value = "/all")
	public List<Project> getAllPrj() {
		return projectService.allProject();
	}
	@GetMapping(value = "/allAdmin")
	public List<Project> getAllPrjAdmin() {
		return projectService.allProject();
	}
	@GetMapping(value = "/byId/{id}")
	public Project findById(@PathVariable Long id) {
 		return projectService.findById(id);
	}
}
