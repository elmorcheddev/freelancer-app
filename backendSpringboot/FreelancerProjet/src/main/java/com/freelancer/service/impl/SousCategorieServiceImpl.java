package com.freelancer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.model.SousCategorie;
import com.freelancer.repository.SousCategorieRepo;
import com.freelancer.service.SousCategorieService;
@Service
public class SousCategorieServiceImpl implements SousCategorieService {

	@Autowired
	private SousCategorieRepo sousCategorieRepo;
	@Override
	public List<SousCategorie> listSousCategories() {
		// TODO Auto-generated method stub
		return sousCategorieRepo.findAll();
	}

}
