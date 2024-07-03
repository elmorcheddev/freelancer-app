package com.freelancer.service;

import java.util.List;

import com.freelancer.model.CV;
import com.freelancer.model.Langue;

 
public interface LangueServices {
 	Langue findByIdLangue(Long id);
 	void deleteLangue(Long id);
	Langue addNewLangue(Langue langue);
	List<Langue> findLangueByCv(CV cv);	
}
