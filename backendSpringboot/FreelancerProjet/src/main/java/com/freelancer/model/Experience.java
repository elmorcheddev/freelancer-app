package com.freelancer.model;

 
import java.util.Date;

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
public class Experience {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
	private String titre;
	private String nomSte;
	private String ville;
	private Date dateDebut;
	private Date dateFin;
	private String description;
	@ManyToOne
	@JoinColumn(name = "idCv")
	@JsonBackReference
	private CV cv; 
}
