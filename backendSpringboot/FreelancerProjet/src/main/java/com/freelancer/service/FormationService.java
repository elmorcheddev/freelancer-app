package com.freelancer.service;

import java.util.List;

import com.freelancer.model.CV;
import com.freelancer.model.Formation;

public interface FormationService {

	Formation addNewFormation(Formation formation);
	Formation findByIdFormation(Long id);
	List<Formation> findFormationByCv(CV cv);
	void deleteFormation(Long id);
}
