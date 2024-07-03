package com.freelancer.dto;

 
 
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.freelancer.model.CV;
import com.freelancer.model.CompetanceCv;
import com.freelancer.model.Experience;
import com.freelancer.model.Formation;
import com.freelancer.model.Langue;
import com.freelancer.model.Utilisateurs;

import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CVDto {
    private Long id;
    private byte[] photo;
    private String resumer;
    private String titre;
    private Utilisateurs utilisateurs;  
	private List<Experience> experience;
 	private List<Formation> formation;
 	private List<Langue> langue ;
 	private List<CompetanceCv> Competance ;
    public static CVDto toDto(CV cv) {
    	return CVDto.builder()
    			.id(cv.getId())
    			.photo(cv.getPhoto())
    			.resumer(cv.getResumer())
    			.titre(cv.getTitre())
    			.utilisateurs(cv.getUtilisateurs())
    			.experience(cv.getExperience())
    			.formation(cv.getFormation())
    			.langue(cv.getLangue())
    			.Competance(cv.getCompetance())
    			.build();}
    
  }

