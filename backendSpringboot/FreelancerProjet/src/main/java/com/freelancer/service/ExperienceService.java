package com.freelancer.service;

import java.util.List;

 
import com.freelancer.model.CV;
import com.freelancer.model.Experience;
 
public interface ExperienceService {
	
	Experience addNewExperience(Experience experience);
	Experience findByIdExperience(Long id);
	List<Experience> findExperienceByCv(CV cv);
	void deleteExperience(Long id);	
	
}
