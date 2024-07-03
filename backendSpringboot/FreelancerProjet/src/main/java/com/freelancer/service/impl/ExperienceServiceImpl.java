package com.freelancer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.dto.CVDto;
import com.freelancer.model.CV;
import com.freelancer.model.Experience;
import com.freelancer.repository.ExperienceRepo;
import com.freelancer.service.ExperienceService;
@Service
public class ExperienceServiceImpl implements ExperienceService {

	@Autowired
	private ExperienceRepo experienceRepo;
	
 

	public ExperienceServiceImpl(ExperienceRepo experienceRepo) {
		super();
		this.experienceRepo = experienceRepo;
	}

	@Override
	public Experience addNewExperience(Experience experience) {
 		return experienceRepo.save(experience);
	}

	@Override
	public Experience findByIdExperience(Long id) {
 		return experienceRepo.findById(id).get();
	}

	@Override
	public List<Experience> findExperienceByCv(CV cv) {
 		return experienceRepo.findByCv(cv);
	}

	@Override
	public void deleteExperience(Long id) {
		experienceRepo.deleteById(id);
	}

}
