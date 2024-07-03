package com.freelancer.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.freelancer.model.Categorie;
import com.freelancer.model.SousCategorie;
import com.freelancer.service.CategorieService;
import com.freelancer.service.SousCategorieService;

@RestController
@RequestMapping(value = "/api/catAndSousCat")
public class CategorieAndSousCategorieController {

	private SousCategorieService sousCategorieService;
	private CategorieService categorieService;
	public CategorieAndSousCategorieController(SousCategorieService sousCategorieService,
			CategorieService categorieService) {
 		this.sousCategorieService = sousCategorieService;
		this.categorieService = categorieService;
	}
	@GetMapping(value = "/allCat")
	public List<Categorie> listCategories(){
		return categorieService.listCategories();
	}
	@GetMapping(value = "/allSousCat")
	public List<SousCategorie> listSousCategories(){
		return sousCategorieService.listSousCategories();
	}
	@GetMapping(value = "/allCatAdmin")
	public List<Categorie> allCatAdmin(){
		return categorieService.listCategories();
	}
	@PostMapping(value = "/saveCat")
	public  Categorie saveCat(@RequestBody Categorie categorie){
		return categorieService.ajouterCat(categorie);
	}
	@GetMapping(value = "/byIdCat/{id}")
	public Categorie findbyId(@PathVariable Long id) {
		return categorieService.findbyIdCategorie(id);
	}
}
