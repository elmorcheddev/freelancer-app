package com.freelancer.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freelancer.model.CV;
import com.freelancer.model.Formation;
import com.freelancer.service.CvService;
import com.freelancer.service.FormationService;

@RestController
@RequestMapping(value = "/api/formation/")

public class FormationController {

	private FormationService formationService;
	private CvService cvService;
	public FormationController(FormationService formationService,CvService cvService) {
 		this.formationService = formationService;
 		this.cvService=cvService;
	}
	@GetMapping(value = "/listFormation/{id}")
	public List<Formation>listFormatonByCV(@PathVariable("id") Long id){
		
		CV cv=cvService.findByIdCv(id);
		return  formationService.findFormationByCv(cv);
	}
	@PostMapping(value = "/save")
	public Formation saveNewFormation(@RequestBody Formation formation) {
		return formationService.addNewFormation(formation);
	}
}
