package com.freelancer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.model.CV;
import com.freelancer.model.CompetanceCv;
import com.freelancer.repository.CompetanceCvRepo;
import com.freelancer.service.CompetanceCvService;
 
@Service
public class CompetanceCvServiceImpl implements CompetanceCvService{

	@Autowired
	private CompetanceCvRepo competanceCvRepo;
	@Override
	public CompetanceCv addNewCompetanceCv(CompetanceCv competanceCv) {
		// TODO Auto-generated method stub
		return competanceCvRepo.save(competanceCv);
	}

	@Override
	public List<CompetanceCv> findByCVCompetanceCvs(CV cv) {
		// TODO Auto-generated method stub
		return competanceCvRepo.findByCv(cv);
	}

}
