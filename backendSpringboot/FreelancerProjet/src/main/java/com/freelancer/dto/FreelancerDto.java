package com.freelancer.dto;

import java.util.Date;
import java.util.List;
import java.util.Set;

import com.freelancer.model.CV;
import com.freelancer.model.Categorie;
import com.freelancer.model.Roles;
import com.freelancer.model.Utilisateurs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FreelancerDto {
    private Long id;
    private String nom;
    private String prenom;
    private Date dateNaissance;
    private String adresse;
    private String email;
    private String numTel;
    private String password;
    private Set<Roles> roles;
    private Categorie categorieFreelancer;
    private double prixH;
    private CV cv;
public static FreelancerDto convertToDto(Utilisateurs utilisateurs) {
	return FreelancerDto.builder()
				.id(utilisateurs.getId())
				.nom(utilisateurs.getNom())
				.prixH(utilisateurs.getPrixH())
				.prenom(utilisateurs.getPrenom())
				.dateNaissance(utilisateurs.getDateNaissance())
				.adresse(utilisateurs.getAdresse())
				.email(utilisateurs.getEmail())
				.password(utilisateurs.getPassword())
				.numTel(utilisateurs.getNumTel())
				.roles(utilisateurs.getRoles())
				.cv(utilisateurs.getCv())
				.categorieFreelancer(utilisateurs.getCategorieFreelancer())
				.build();
}
 }
