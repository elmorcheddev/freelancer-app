package com.freelancer.dto;

 

import java.util.List;
import java.util.Set;

import com.freelancer.model.Project;
import com.freelancer.model.Roles;
import com.freelancer.model.Utilisateurs;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClientDto {
    private Long id;
    private String nom;
    private String prenom;
     private String email;
     private Set<Roles> roles;
     private String password;     
 public static ClientDto convertToDto(Utilisateurs utilisateurs) {
	return ClientDto.builder()
				.id(utilisateurs.getId())
				.prenom(utilisateurs.getPrenom())
				.email(utilisateurs.getEmail())
				.nom(utilisateurs.getNom())
 				.password(utilisateurs.getPassword())
  				.roles(utilisateurs.getRoles())
				.build();}
 }
