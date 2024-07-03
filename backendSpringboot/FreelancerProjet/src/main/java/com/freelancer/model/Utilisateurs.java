package com.freelancer.model;

import java.util.Date;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
 
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
 import lombok.Data;
 import lombok.NoArgsConstructor;
 
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Utilisateurs {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String nom;
private String prenom;
private double prixH;
private Date dateNaissance;
private String adresse ;
private String email; 
 private String numTel;
 private String password; 
 private boolean etat; 
 
@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name = "idCv")
@JsonBackReference
private CV cv;
@ManyToOne
@JoinColumn(name = "idcatfreelancer")
 private Categorie categorieFreelancer;
@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
@JoinTable(name= "USER_ROLE",
      joinColumns = {@JoinColumn(name= "ID_USER")
      },
     inverseJoinColumns = {
		@JoinColumn(name = "ID_ROLE")
})
private Set<Roles> roles;

@Override
public String toString() {
  return "Utilisateurs [id=" + id + ", nom=" + nom + ", prenom=" + prenom + "]";
}
}
