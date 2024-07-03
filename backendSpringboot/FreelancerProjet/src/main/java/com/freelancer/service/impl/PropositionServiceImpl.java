package com.freelancer.service.impl;

import java.util.Date;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.model.CV;
import com.freelancer.model.Project;
import com.freelancer.model.Proposition;
import com.freelancer.model.Utilisateurs;
import com.freelancer.repository.CvRepo;
import com.freelancer.repository.ProjectRepo;
import com.freelancer.repository.PropositionRepo;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.PropositionService;
@Service
public class PropositionServiceImpl implements PropositionService {

		@Autowired
		private PropositionRepo propositionRepo;
		@Autowired
		private ProjectRepo projectRepo;
		@Autowired
		private UtilisateursRepo utilisateursRepo;
		@Autowired
		private CvRepo cvRepo;
	@Override
	public Proposition sendProposition(Proposition proposition) {
		CV cv = cvRepo.findById(proposition.getCv().getId()).get();
		Utilisateurs client = utilisateursRepo.findById(proposition.getClient().getId()).get();

		Project project = projectRepo.findById(proposition.getProject().getId()).get();
		boolean exist = propositionRepo.existsByCvAndProject(cv,  project);

		if(!exist) {
			proposition.setProject(project);
			proposition.setAccepter(false);
			proposition.setEnattent(true);
			proposition.setSendingDate(new Date());
			proposition.setRefuser(false);
			proposition.setCv(cv);
			proposition.setClient(client);

			return propositionRepo.save(proposition);
		}else {
			return null;
		}
	
	}
 
	@Override
	public List<Proposition> findByProject(Project project) {
		// TODO Auto-generated method stub
		return propositionRepo.findByProject(project);
	}
	@Override
	public List<Proposition> findByClient(Utilisateurs client) {
		// TODO Auto-generated method stub
		return propositionRepo.findByClient(client);
	}
 
 
	@Override
	public Proposition accepterProposition(Long id) {
		Proposition proposition = propositionRepo.findById(id).get();
		if(proposition.isAccepter()==false) {
			proposition.setAccepter(true);
			proposition.setEnattent(false);
			proposition.setRefuser(false);
	 		return propositionRepo.save(proposition);

		}else {
			return null;
		}
	}
	@Override
	public  Proposition refuserProposition(Long id) {
		Proposition proposition = propositionRepo.findById(id).get();
		if(proposition.isRefuser()==false) {
			proposition.setAccepter(false);
			proposition.setEnattent(false);
			proposition.setRefuser(true);
	 		return propositionRepo.save(proposition);

		}else {
			return null;
		}	}

	@Override
	public List<Proposition> findByCv(CV cv) {
		// TODO Auto-generated method stub
		return propositionRepo.findByCv(cv);
	}
	@Override
	public void deleteProp(Long id ) {
		// TODO Auto-generated method stub
		  propositionRepo.deleteById(id);
		 
	}

	@Override
	public List<Proposition> findByCvAndEnattentIsTrue(CV cv) {
		// TODO Auto-generated method stub
		return propositionRepo.findByCvAndEnattentIsTrue(cv);
	}

	@Override
	public List<Proposition> findByCvAndAccepterIsTrue(CV cv) {
		// TODO Auto-generated method stub
		return propositionRepo.findByCvAndAccepterIsTrue(cv);
	}

	@Override
	public List<Proposition> findByCvAndRefuserIsTrue(CV cv) {
		// TODO Auto-generated method stub
		return propositionRepo.findByCvAndRefuserIsTrue(cv);
	}

	@Override
	public boolean existsByCvAndProject(CV cv, Project project) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Proposition> findByClientAndAccepterIsTrue(Utilisateurs client) {
		// TODO Auto-generated method stub
		return propositionRepo.findByClientAndAccepterIsTrue(client);
	}
	@Override
	public List<Proposition> allProp() {
		// TODO Auto-generated method stub
		return propositionRepo.findAll();
	}

	@Override
	public List<Proposition> findByAccepterIsTrue() {
		// TODO Auto-generated method stub
		return propositionRepo.findByAccepterIsTrue();
	}
}
