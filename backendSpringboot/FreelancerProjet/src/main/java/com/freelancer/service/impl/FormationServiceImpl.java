package com.freelancer.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.freelancer.model.CV;
import com.freelancer.model.Formation;
import com.freelancer.repository.CvRepo;
import com.freelancer.repository.FormationRepo;
import com.freelancer.service.FormationService;
@Service
public class FormationServiceImpl implements FormationService {
	
 private FormationRepo formationRepo;
 private CvRepo cvRepo;
	public FormationServiceImpl(FormationRepo formationRepo,CvRepo cvRepo) {
 	this.formationRepo = formationRepo;
 	this.cvRepo=cvRepo;
}

	@Override
	public Formation addNewFormation(Formation formation) {
		//formation.setCv(cvRepo.findById(formation.getCv().getId()).get());
		return formationRepo.save(formation);
	}

	@Override
	public Formation findByIdFormation(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Formation> findFormationByCv(CV cv) {
	 
		return formationRepo.findByCv(cv);
	}

	@Override
	public void deleteFormation(Long id) {
		// TODO Auto-generated method stub

	}

}
