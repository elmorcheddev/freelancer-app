package com.freelancer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.model.CV;
import com.freelancer.model.CompetanceCv;
 
import java.util.List;


public interface CompetanceCvRepo extends JpaRepository<CompetanceCv, Long>{

	List<CompetanceCv> findByCv(CV cv);
}
