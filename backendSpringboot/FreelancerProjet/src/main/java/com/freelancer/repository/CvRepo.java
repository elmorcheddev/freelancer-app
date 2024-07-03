package com.freelancer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

 import com.freelancer.model.CV;
import com.freelancer.model.Utilisateurs;

public interface CvRepo extends JpaRepository<CV, Long>{
	
	 CV  findByUtilisateurs(Utilisateurs freelancer);
}
