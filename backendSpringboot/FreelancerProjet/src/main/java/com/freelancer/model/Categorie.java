package com.freelancer.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Categorie {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
private String nomCat;
@OneToMany( mappedBy = "categorie")
@JsonManagedReference
private List<SousCategorie> sousCategories;
}
