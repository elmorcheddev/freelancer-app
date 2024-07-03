package com.freelancer.model;

 
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CompetanceCv {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	private String nomCompetance ;
	
	@ManyToOne
	@JoinColumn(name = "idCv")
	@JsonBackReference
	private CV cv; 
}
