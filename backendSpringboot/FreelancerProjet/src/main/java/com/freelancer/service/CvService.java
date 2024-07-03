package com.freelancer.service;

import java.util.List;

import com.freelancer.dto.CVDto;
 import com.freelancer.model.CV;
import com.freelancer.model.Utilisateurs;

public interface CvService {

 
 	//CVDto findByUtilisateurs(DemandeurEmploiDto demandeurEmploi);
	CV updateCv(CV cv);
	CV findByIdCv(Long id);
	CVDto findByUtilisateurs(Utilisateurs freelancer);
	List<CV> findAllCv();
}

