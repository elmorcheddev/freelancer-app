package com.freelancer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freelancer.model.CV;
import com.freelancer.model.Project;
import com.freelancer.model.Proposition;
import com.freelancer.model.Utilisateurs;
import com.freelancer.repository.CvRepo;
import com.freelancer.repository.ProjectRepo;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.PropositionService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(value = "/api/proposition/")
public class PropositionController {
	@Autowired
	private CvRepo cvRepo;
	@Autowired
	private PropositionService propositionService;
	@Autowired
	private UtilisateursRepo utilisateursRepo;
	@Autowired
	private ProjectRepo projectRepo;
	@PostMapping(value = "save")
	public Proposition postMethodName(@RequestBody Proposition proposition) {
		//TODO: process POST request
		
		return propositionService.sendProposition(proposition);
	}
 
	@GetMapping(value = "byCv/{id}")
	public List<Proposition> findByFreelancer(@PathVariable Long id) {
			CV cv=cvRepo.findById(id).get();
		return propositionService.findByCv(cv);
	}
	@GetMapping(value = "byCvaccepter/{id}")
	public List<Proposition> byCvaccepter(@PathVariable Long id) {
			CV cv=cvRepo.findById(id).get();
		return propositionService.findByCvAndAccepterIsTrue(cv);
	}
	@GetMapping(value = "byCvrefuser/{id}")
	public List<Proposition> byCvrefuser(@PathVariable Long id) {
			CV cv=cvRepo.findById(id).get();
		return propositionService.findByCvAndRefuserIsTrue(cv);
	}
	@GetMapping(value = "byCvenattent/{id}")
	public List<Proposition> byCvenattent(@PathVariable Long id) {
			CV cv=cvRepo.findById(id).get();
		return propositionService.findByCvAndEnattentIsTrue(cv);
	}
	@DeleteMapping(value = "deleteProp/{id}")
	public ResponseEntity<?> deleteProp(@PathVariable Long id) {
 		  propositionService.deleteProp(id);
		return ResponseEntity.ok(null);
	}
	@GetMapping(value = "byproject/{id}")
	public List<Proposition> findByProject(@PathVariable Long id ) {
		Project project = projectRepo.findById(id).get();
		return propositionService.findByProject(project);
	}
	@GetMapping(value = "byclient/{id}")
	public List<Proposition> findByClient(@PathVariable Long id ) {
		Utilisateurs client = utilisateursRepo.findById(id).get();
		return propositionService.findByClient(client);
	}
	@GetMapping(value = "byclientAccepter/{id}")
	public List<Proposition> findByClientAccepter(@PathVariable Long id ) {
		Utilisateurs client = utilisateursRepo.findById(id).get();
		return propositionService.findByClientAndAccepterIsTrue(client);
	}
	@GetMapping(value = "all")
	public List<Proposition> allprop() {
 		return propositionService.allProp();
	}
	
	@GetMapping(value = "accepter/{id}")
	public Proposition accepter(@PathVariable Long id ) {
 		return propositionService.accepterProposition(id);
	}
	@GetMapping(value = "refuser/{id}")
	public Proposition refuser(@PathVariable Long id ) {
 		return propositionService.refuserProposition(id);
	}
	@GetMapping(value = "byPropositionAccepter")
	public List<Proposition> byPropositionAccepter( ) {
 		return propositionService.findByAccepterIsTrue();
	}
}
