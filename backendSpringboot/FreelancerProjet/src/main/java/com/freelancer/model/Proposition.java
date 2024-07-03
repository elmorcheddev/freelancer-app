package com.freelancer.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Proposition {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
@Lob
	private String lettreMotivation ;
	private double price;
	private String portfolioLink ;
	private boolean accepter;
	private boolean refuser ;
	private int workIn;
	private boolean enattent;
	private Date sendingDate;
@ManyToOne
@JoinColumn(name = "idProject")
	private Project project;
@ManyToOne
@JoinColumn(name = "idcv")
	private CV cv;

@ManyToOne
@JoinColumn(name = "idclient")
	private Utilisateurs client;
}
