package com.freelancer.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.model.Categorie;
import com.freelancer.repository.CategorieRepo;
import com.freelancer.service.CategorieService;
@Service
public class CategorieServiceImpl implements CategorieService {

	@Autowired
	private CategorieRepo categorieRepo;
	@Override
	public List<Categorie> listCategories() {
		// TODO Auto-generated method stub
		return categorieRepo.findAll();
	}
	@Override
	public Categorie findbyIdCategorie(Long id) {
		// TODO Auto-generated method stub
		return categorieRepo.findById(id).get();
	}
	@Override
	public Categorie ajouterCat(Categorie categorie) {
		// TODO Auto-generated method stub
		if(!categorieRepo.existsByNomCat(categorie.getNomCat())) {
			return categorieRepo.save(categorie);
		}else {
			return null;
		}
		
	}

}
