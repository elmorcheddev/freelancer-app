package com.freelancer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.dto.CVDto;
import com.freelancer.model.CV;
import com.freelancer.model.Utilisateurs;
import com.freelancer.repository.CvRepo;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.CvService;

 
@Service
public class CvServiceImpl implements CvService {

    @Autowired
    private CvRepo cvRepository;

    @Autowired
    private UtilisateursRepo utilisateursRepo ; 

    @Override
    public CV updateCv(CV cv) {
    	Utilisateurs utilisateurs= utilisateursRepo.findById(cv.getUtilisateurs().getId()).get();
    	cv.setResumer(cv.getResumer());
    	cv.setTitre(cv.getTitre());
    	cv.setPhoto(cv.getPhoto());
    	cv.setUtilisateurs(utilisateurs);
    	return cvRepository.save(cv);
      
    }

		 
 
    
    @Override
    public CV findByIdCv(Long id) {
    	return  cvRepository.findById(id).get() ;
    }
	@Override
	public CVDto findByUtilisateurs(Utilisateurs demandeurEmploiDto) {
 		return 	 CVDto.toDto(cvRepository.findByUtilisateurs(demandeurEmploiDto));
 
	}




	@Override
	public List<CV> findAllCv() {
		// TODO Auto-generated method stub
		return cvRepository.findAll();
	}
}

