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
import com.freelancer.model.Langue;
import com.freelancer.service.CvService;
import com.freelancer.service.LangueServices;

@RestController
@RequestMapping(value = "/api/langue")

public class LangueController {

	private LangueServices langueServices;
	private CvService cvService;
	public LangueController(LangueServices langueServices,CvService cvService) {
 		this.langueServices = langueServices;
 		this.cvService=cvService;
	}
	@GetMapping(value = "/findById/{id}")
	public Langue findByIdLangue(@PathVariable Long id) {
		return langueServices.findByIdLangue(id);
	}
	@PostMapping(value = "/save")
	public Langue saveNewLangue(@RequestBody Langue langue) {
		
		return langueServices.addNewLangue(langue);
	}
	@GetMapping(value = "/byCV/{id}")
	public List<Langue> findLangueByCv(@PathVariable("id") Long id){
		CV cv = cvService.findByIdCv(id);
		return langueServices.findLangueByCv(cv);
	}
}
