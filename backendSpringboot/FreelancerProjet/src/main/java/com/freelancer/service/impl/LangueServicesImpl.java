package com.freelancer.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.freelancer.model.CV;
import com.freelancer.model.Langue;
import com.freelancer.repository.LangueRepo;
import com.freelancer.service.LangueServices;
@Service
public class LangueServicesImpl implements LangueServices{

	private LangueRepo langueRepo;
	
	public LangueServicesImpl(LangueRepo langueRepo) {
		this.langueRepo = langueRepo;
	}

	@Override
	public Langue addNewLangue(Langue langue) {
 		return langueRepo.save(langue);
	}

	@Override
	public Langue findByIdLangue(Long id) {
 		return langueRepo.findById(id).get();
	}

	@Override
	public List<Langue> findLangueByCv(CV cv) {
 		return langueRepo.findByCv(cv);
	}

	@Override
	public void deleteLangue(Long id) {
				langueRepo.deleteById(id);
	}

}
