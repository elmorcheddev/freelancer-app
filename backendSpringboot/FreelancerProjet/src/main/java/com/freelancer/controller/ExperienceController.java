package com.freelancer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

 import com.freelancer.model.CV;
import com.freelancer.model.Experience;
 import com.freelancer.service.CvService;
import com.freelancer.service.ExperienceService;

@RestController
@RequestMapping("/api/exp")

public class ExperienceController {

	@Autowired
	private ExperienceService experienceService;
	@Autowired
	private CvService cvService;
	
	
	@GetMapping(value = "expByCV/{id}")
	public List<Experience> listExpByCv(@PathVariable Long id ){
		CV cv = cvService.findByIdCv(id);
		return experienceService.findExperienceByCv(cv);
		
	}
	@PostMapping(value = "/save")
	public Experience saveNewFormation(@RequestBody Experience experience) {
		return experienceService.addNewExperience(experience);
	}
}
