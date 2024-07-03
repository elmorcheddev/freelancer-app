package com.freelancer.controller;

 
import java.io.IOException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.freelancer.dto.CVDto;
import com.freelancer.dto.FreelancerDto;
import com.freelancer.model.CV;
import com.freelancer.model.Utilisateurs;
import com.freelancer.service.CvService;
import com.freelancer.service.UtilisateurServices;
@RestController
@RequestMapping("/api/cvs")


public class CvController {

  private CvService cvService;
  private UtilisateurServices utilisateurServices;

  public CvController(CvService cvService, UtilisateurServices utilisateurServices) {
    this.cvService = cvService;
    this.utilisateurServices = utilisateurServices;
  }

  @PutMapping(value = "/saveCv")
  public ResponseEntity<CV> saveCvForFreelancer(@RequestPart("cv") CV cv, @RequestPart("photo") MultipartFile image) {
    try {
      
      cv.setPhoto(image.getBytes());
      return ResponseEntity.ok(cvService.updateCv(cv));
    } catch (IOException e) {
      // Handle exception appropriately (e.g., return bad request)
      return ResponseEntity.badRequest().build();
    }


  }


  @GetMapping(value = "/findCvByUtilisateur/{id}")
  public CVDto findByUtilisateurs(@PathVariable Long id) {
    FreelancerDto freelancerDto = utilisateurServices.getJobSeekerById(id);

    Utilisateurs utilisateurs = new Utilisateurs();
    utilisateurs.setId(freelancerDto.getId());
    utilisateurs.setNom(freelancerDto.getNom());
    utilisateurs.setPrenom(freelancerDto.getPrenom());
 
    return cvService.findByUtilisateurs(utilisateurs);
  }
  @GetMapping(value = "/all")
  public List<CV> findAllCv() {
		// TODO Auto-generated method stub
		return cvService.findAllCv();
	}
  @GetMapping(value = "/findByID/{id}")
  public CV findByIdCv(@PathVariable Long id) {    
	  
    return cvService.findByIdCv(id);
  }
}
