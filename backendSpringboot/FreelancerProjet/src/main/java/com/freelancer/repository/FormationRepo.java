package com.freelancer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.model.CV;
import com.freelancer.model.Formation;

public interface FormationRepo extends JpaRepository<Formation, Long>{
	
	List<Formation> findByCv(CV cv);

}
