package com.freelancer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.model.CV;
import com.freelancer.model.Langue;

public interface LangueRepo extends JpaRepository<Langue, Long>{
	List<Langue> findByCv(CV cv);
}
