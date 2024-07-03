package com.freelancer.model;

import java.util.Date;
import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Project {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String title;
private Date createdDate;
private String skills; 
private String projectSize;
private String workingIn;
private String experience;
 private String bedgutType;
 @Lob
 private String description;

@ManyToOne
@JoinColumn(name = "idClient")
private Utilisateurs client;
@ManyToOne
@JoinColumn(name = "idcatProjet")
private Categorie categorieProjet;
}
