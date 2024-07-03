package com.freelancer.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.freelancer.dto.ClientDto;
import com.freelancer.dto.ClientDto;
import com.freelancer.dto.FreelancerDto;
import com.freelancer.model.CV;
import com.freelancer.model.Categorie;
import com.freelancer.model.Roles;
import com.freelancer.model.Utilisateurs;
import com.freelancer.repository.CategorieRepo;
import com.freelancer.repository.CvRepo;
import com.freelancer.repository.RolesRepo;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.UtilisateurServices;
@Service
public class UtilisateurServicesImpl implements UtilisateurServices{

@Autowired
private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    private UtilisateursRepo utilisateursRepository;
    @Autowired
    private RolesRepo rolesRepo;
    @Autowired
    private CvRepo cvRepo;
    @Autowired
    private CategorieRepo categorieRepo;
    @Override
    public FreelancerDto addFreelancer(FreelancerDto freelancer) {
        Utilisateurs utilisateur = new Utilisateurs();
        Set<Roles> listRole=new HashSet<>();
        Roles roles = rolesRepo.findByNomRole("FREELANCER");
        listRole.add(roles);
        Categorie categorie = categorieRepo.findById(freelancer.getCategorieFreelancer().getId()).get();
        boolean Exist = utilisateursRepository.existsByEmail(freelancer.getEmail());
        if (!Exist) {
            utilisateur.setNom(freelancer.getNom());
            utilisateur.setPrenom(freelancer.getPrenom());
            utilisateur.setDateNaissance(freelancer.getDateNaissance());
            utilisateur.setAdresse(freelancer.getAdresse());
            utilisateur.setCategorieFreelancer(categorie);
            utilisateur.setNom(freelancer.getNom());
            utilisateur.setPrenom(freelancer.getPrenom());
            utilisateur.setEmail(freelancer.getEmail());
            utilisateur.setPassword(passwordEncoder.encode(freelancer.getPassword()));

            utilisateur.setPrixH(freelancer.getPrixH());
            utilisateur.setNumTel(freelancer.getNumTel());
            utilisateur.setRoles(listRole);

             utilisateur = utilisateursRepository.save(utilisateur);

             CV cv = new CV();
            cv.setUtilisateurs(utilisateur); // Set user reference
            
            cv = cvRepo.save(cv);

             utilisateur.setCv(cv);

             utilisateur = utilisateursRepository.save(utilisateur);

            return FreelancerDto.convertToDto(utilisateur);
        } else {
            return null;
        }
    }

    @Override
    public Utilisateurs addAdmin(Utilisateurs utilisateurs) {
        Utilisateurs utilisateur = new Utilisateurs();
        Roles roles = rolesRepo.findByNomRole("ADMIN");
        Set<Roles> listRole=new HashSet<>();
         listRole.add(roles);
         boolean Exist = utilisateursRepository.existsByEmail(utilisateurs.getEmail());
         if (!Exist) {
        utilisateur.setNom(utilisateurs.getNom());
        utilisateur.setPrenom(utilisateurs.getPrenom());
        utilisateur.setEmail(utilisateurs.getEmail());
        utilisateur.setPassword(passwordEncoder.encode(utilisateurs.getPassword()));
        utilisateur.setRoles(listRole);
        utilisateur.setEtat(true);

        utilisateur= utilisateursRepository.save(utilisateur);
        return utilisateur;
         }else {
        	 return null;
         }
    }


    @Override
    public ClientDto addClient(ClientDto clientDto) {
        Utilisateurs utilisateur = new Utilisateurs();
        Roles roles = rolesRepo.findByNomRole("CLIENT");
        Set<Roles> listRole=new HashSet<>();
         listRole.add(roles);
         boolean Exist = utilisateursRepository.existsByEmail(clientDto.getEmail());
         if (!Exist) {
        utilisateur.setNom(clientDto.getNom());
        utilisateur.setPrenom(clientDto.getPrenom());
        utilisateur.setEmail(clientDto.getEmail());
        utilisateur.setEtat(true);

        utilisateur.setPassword(passwordEncoder.encode(clientDto.getPassword()));
        utilisateur.setRoles(listRole);
        utilisateur= utilisateursRepository.save(utilisateur);
        return ClientDto.convertToDto(utilisateur);
         }else {
        	 return null;
         }
    }

    @Override
    public FreelancerDto updateJobSeeker(FreelancerDto freelancer) {
        Long id = freelancer.getId();
        Roles roles = rolesRepo.findByNomRole("FREELANCER");
        Set<Roles> listRole=new HashSet<>();
         listRole.add(roles);
        Utilisateurs utilisateur = utilisateursRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job Seeker not found with ID: " + id));
        utilisateur.setNom(freelancer.getNom());
        utilisateur.setPrenom(freelancer.getPrenom());
        utilisateur.setDateNaissance(freelancer.getDateNaissance());
        utilisateur.setAdresse(freelancer.getAdresse());
        utilisateur.setEmail(freelancer.getEmail());
        utilisateur.setEtat(true);
        utilisateur.setNumTel(freelancer.getNumTel());
        utilisateur.setPassword(passwordEncoder.encode(freelancer.getPassword()));
        utilisateur.setRoles(listRole);
        utilisateur = utilisateursRepository.save(utilisateur);
        return FreelancerDto.convertToDto(utilisateur);
    }

    @Override
    public ClientDto updateClient(ClientDto clientDto) {
        Long id = clientDto.getId();
         Set<Roles> listRole=new HashSet<>();
        Roles roles = rolesRepo.findByNomRole("FREELANCER");
        listRole.add(roles);
        Utilisateurs utilisateur = utilisateursRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found with ID: " + id));
        utilisateur.setNom(clientDto.getNom());
        utilisateur.setPrenom(clientDto.getPrenom());
        utilisateur.setEmail(clientDto.getEmail());
        utilisateur.setPassword(passwordEncoder.encode(clientDto.getPassword()));

         utilisateur.setRoles(listRole);

        utilisateur = utilisateursRepository.save(utilisateur);
        return ClientDto.convertToDto(utilisateur);
    }

    @Override
    public FreelancerDto getJobSeekerById(Long id) {
        Utilisateurs utilisateur = utilisateursRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job Seeker not found with ID: " + id));
        return FreelancerDto.convertToDto(utilisateur);
    }

    @Override
    public ClientDto getClientById(Long id) {
        Utilisateurs utilisateur = utilisateursRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Client not found with ID: " + id));
        return ClientDto.convertToDto(utilisateur);
    }

    @Override
    public void deleteJobSeeker(Long id) {
        utilisateursRepository.deleteById(id);
    }

    @Override
    public void deleteClient(Long id) {
        utilisateursRepository.deleteById(id);
    }

    @Override
  	public Utilisateurs findByEmailUtilisateur(String email) {
  		// TODO Auto-generated method stub
  		return utilisateursRepository.findByEmail(email);
  	}




	@Override
	public List<CV> findByCategorieFreelancer(Categorie categorieFreelancer) {
 			    List<Utilisateurs> utilisateurs = utilisateursRepository.findByCategorieFreelancer(categorieFreelancer);
			    return utilisateurs.stream()
 			      .map(utilisateur -> utilisateur.getCv())
			      .collect(Collectors.toList());
			  }




	@Override
	public Utilisateurs findBYiDUtilisateurs(Long iduser) {
		// TODO Auto-generated method stub
		return utilisateursRepository.findById(iduser).get();
	}




	@Override
	public List<Utilisateurs> allUtilisateur() {
		// TODO Auto-generated method stub
		return utilisateursRepository.findAll();
	}

	@Override
	public List<Utilisateurs> findByRoleName(String roleName) {
		// TODO Auto-generated method stub
		return utilisateursRepository.findByRoleName(roleName);
	}
	@Override
	public Utilisateurs activeDesactiveUtilisateur(Long id) {
		Utilisateurs utilisateurs= utilisateursRepository.findById(id).orElse(null);
		if(utilisateurs.isEtat()== true) {
			utilisateurs.setEtat(false);
			return utilisateursRepository.save(utilisateurs);
		}else  {
			utilisateurs.setEtat(true);
			return utilisateursRepository.save(utilisateurs);

		} 
	}
	}


	 

 
