package com.freelancer.service;

import java.util.List;

import com.freelancer.model.CV;
import com.freelancer.model.Project;
import com.freelancer.model.Proposition;
import com.freelancer.model.Utilisateurs;

public interface PropositionService {

	Proposition sendProposition(Proposition proposition);
 	List<Proposition> findByProject(Project project);
	List<Proposition> findByClient(Utilisateurs client); 
	Proposition accepterProposition(Long id);
	Proposition refuserProposition(Long id);
	List<Proposition> findByCv(CV CV);
	List<Proposition> findByCvAndEnattentIsTrue(CV cv);
	List<Proposition> findByCvAndAccepterIsTrue(CV cv); 
	List<Proposition> findByCvAndRefuserIsTrue(CV cv);
	List<Proposition> findByClientAndAccepterIsTrue(Utilisateurs client); 
	List<Proposition> findByAccepterIsTrue();

 	boolean existsByCvAndProject(CV cv, Project project);
	 void deleteProp(Long id);
	List<Proposition> allProp();
 }
