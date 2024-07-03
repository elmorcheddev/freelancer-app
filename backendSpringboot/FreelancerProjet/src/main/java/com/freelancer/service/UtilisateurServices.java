package com.freelancer.service;

import com.freelancer.dto.FreelancerDto;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.freelancer.dto.ClientDto;
import com.freelancer.model.CV;
import com.freelancer.model.Categorie;
import com.freelancer.model.Roles;
import com.freelancer.model.Utilisateurs;

public interface UtilisateurServices {

     FreelancerDto addFreelancer(FreelancerDto freelancerDto);

     ClientDto addClient(ClientDto clientDto);

     FreelancerDto updateJobSeeker(FreelancerDto jobSeekerDto);
 
     ClientDto updateClient(ClientDto clientDto);

     FreelancerDto getJobSeekerById(Long id);

     ClientDto getClientById(Long id);

     void deleteJobSeeker(Long id);

     void deleteClient(Long id);
     List<CV> findByCategorieFreelancer(Categorie categorieFreelancer);
	Utilisateurs findByEmailUtilisateur(String email);
    List<Utilisateurs> findByRoleName(String roleName);

	Utilisateurs findBYiDUtilisateurs(Long iduser);

	List<Utilisateurs> allUtilisateur();

	Utilisateurs addAdmin(Utilisateurs utilisateurs);

	Utilisateurs activeDesactiveUtilisateur(Long id);
}
