package com.freelancer.controller;

 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
 import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

 import com.freelancer.dto.ClientDto;
import com.freelancer.dto.FreelancerDto;
import com.freelancer.model.CV;
import com.freelancer.model.Categorie;
import com.freelancer.model.Utilisateurs;
import com.freelancer.service.CategorieService;
import com.freelancer.service.UtilisateurServices;

@RestController
@RequestMapping(value = "/api/utilisateur")

public class UtilisateurController {
@Autowired
	private UtilisateurServices utilisateurServices;
 @Autowired
 private CategorieService categorieService;
    @PostMapping(value = "/save/jobseeker")
    public ResponseEntity<FreelancerDto> addJobSeeker(@RequestBody FreelancerDto freelancerDto) {
    	System.out.print(freelancerDto.getCategorieFreelancer());
        FreelancerDto savedfreelancerDto = utilisateurServices.addFreelancer(freelancerDto);
        return ResponseEntity.ok(savedfreelancerDto);
    }

    @PostMapping(value = "/save/client")
    public ResponseEntity<ClientDto> addEmployer(@RequestBody ClientDto employerDto) {
        ClientDto savedEmployerDto = utilisateurServices.addClient(employerDto);
        return ResponseEntity.ok(savedEmployerDto);
    }
    @PostMapping(value = "/save/admin")
    public ResponseEntity<Utilisateurs> addAdmin(@RequestBody Utilisateurs utilisateurs) {
        Utilisateurs admin = utilisateurServices.addAdmin( utilisateurs);
        return ResponseEntity.ok(admin);
    }
    @PutMapping(value = "/update/jobseeker/{id}")
    public ResponseEntity<FreelancerDto> updateJobSeeker(@PathVariable Long id, @RequestBody FreelancerDto freelancerDto) {
        freelancerDto.setId(id); // Ensure ID matches path variable
        FreelancerDto updatedfreelancerDto = utilisateurServices.updateJobSeeker(freelancerDto);
        return ResponseEntity.ok(updatedfreelancerDto);
    }

    @PutMapping(value = "/update/client/{id}")
    public ResponseEntity<ClientDto> updateEmployer(@PathVariable("id") Long id, @RequestBody ClientDto clientDto) {
        clientDto.setId(id);  
        ClientDto updatedEmployerDto = utilisateurServices.updateClient(clientDto);
        return ResponseEntity.ok(updatedEmployerDto);
    }

    @GetMapping(value = "/get/jobseeker/{id}")
    public ResponseEntity<FreelancerDto> getJobSeekerById(@PathVariable("id") Long id) {
        FreelancerDto freelancerDto = utilisateurServices.getJobSeekerById(id);
        return ResponseEntity.ok(freelancerDto);
    }

    @GetMapping(value = "/get/client/{id}")
    public ResponseEntity<ClientDto> getEmployerById(@PathVariable("id") Long id) {
        ClientDto employerDto = utilisateurServices.getClientById(id);
        return ResponseEntity.ok(employerDto);
    }

    @DeleteMapping(value = "/delete/jobseeker/{id}")
    public ResponseEntity<?> deleteJobSeeker(@PathVariable("id") Long id) {
    	utilisateurServices.deleteJobSeeker(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(value = "/delete/employer/{id}")
    public ResponseEntity<?> deleteEmployer(@PathVariable("id") Long id) {
    	utilisateurServices.deleteClient(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping(value = "/listFreelancerbyCat/{id}")
    public List<CV> findByCategorieFreelancer(@PathVariable Long id ) {
    	Categorie categorieFreelancer=categorieService.findbyIdCategorie(id);
    	
    	return utilisateurServices.findByCategorieFreelancer(categorieFreelancer);
	}
    @GetMapping(value = "/allUtilisateur")
    public List<Utilisateurs> allUtilisateur(){
     	
    	return utilisateurServices.allUtilisateur();
	}
    @GetMapping(value = "/utilisateurById/{id}")
    public Utilisateurs byid(@PathVariable Long id){
     	
    	return utilisateurServices.findBYiDUtilisateurs(id);
	}
    @GetMapping(value = "/client")
    public List<Utilisateurs> client(){
     	
    	return utilisateurServices.findByRoleName("CLIENT");
	}
    @GetMapping(value = "/freelancer")
public List<Utilisateurs> freelancer(){     	
    	return utilisateurServices.findByRoleName("FREELANCER");
	}
	@GetMapping(value = "/changeEtatUtilisateur/{id}")
	public Utilisateurs changeEtatUtilisateur(@PathVariable Long id) {
	return utilisateurServices.activeDesactiveUtilisateur(id);
	}
}
