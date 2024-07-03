package com.freelancer.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CV {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id ;
@Lob
@Column(name = "photo", columnDefinition="LONGBLOB")	
	private byte[]  photo;
@Lob
	private String resumer;
	private String titre;
	@OneToOne
	@JoinColumn(name = "idUtilisateur")
	@JsonManagedReference
	private Utilisateurs utilisateurs;
	 @OneToMany( mappedBy = "cv")
	 @JsonManagedReference
	private List<Experience> experience;
	 @OneToMany( mappedBy = "cv")
	 @JsonManagedReference
	private List<Formation> formation;
	 @OneToMany( mappedBy = "cv")
	 @JsonManagedReference
	private List<Langue> langue ;
	 @OneToMany( mappedBy = "cv")
	 @JsonManagedReference
	private List<CompetanceCv> competance ;
	
}
