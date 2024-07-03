package com.freelancer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freelancer.model.CV;
import com.freelancer.model.CompetanceCv;
import com.freelancer.model.Formation;
import com.freelancer.repository.CvRepo;
import com.freelancer.service.CompetanceCvService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping(value = "/api/comp/")
public class CompetanceCvController {

	@Autowired
	private CompetanceCvService competanceCvService;
	@Autowired
	private CvRepo cvRepo;
	@GetMapping(value="compbycv/{id}")
	 public List<CompetanceCv> findByCompCv(@PathVariable Long id){
		CV cv = cvRepo.findById(id).get();
		return competanceCvService.findByCVCompetanceCvs(cv);
	}
	@PostMapping(value = "save")
	public CompetanceCv saveNewComp(@RequestBody CompetanceCv comp) {
		return competanceCvService.addNewCompetanceCv(comp);
	}	
}
