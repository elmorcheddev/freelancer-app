package com.freelancer.model;
 

	import java.util.Date;
	import java.util.Set;

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
	@Data
	@NoArgsConstructor
	@AllArgsConstructor
	public class Review {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Date dateCreation;
	private String content;
	private double start;
	@ManyToOne
	@JoinColumn(name = "idclient")
	private Utilisateurs client;

	@ManyToOne
	@JoinColumn(name = "idcomp")
	private CV cv;
	}
 
