package com.freelancer.service;

import java.util.List;

import com.freelancer.model.Categorie;

public interface CategorieService {
	
List<Categorie> listCategories();
Categorie findbyIdCategorie(Long id);
 Categorie ajouterCat(Categorie categorie);

}
