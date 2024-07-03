package com.freelancer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

 import com.freelancer.model.CV;
import com.freelancer.model.Experience;

public interface ExperienceRepo extends JpaRepository<Experience, Long>{

	List<Experience> findByCv(CV cv);
}
