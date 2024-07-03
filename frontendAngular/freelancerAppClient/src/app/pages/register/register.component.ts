import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
 import { CV } from 'src/app/monClass/cv';
 import { CategorieService } from 'src/app/monServices/categorie.servic';
import {   UtilisateurService } from 'src/app/monServices/utilisateur.service';
 import { Utilisateur } from 'src/app/monClass/client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  freelancer: Utilisateur = {
    id: 0,
    nom: '',
    prenom: '',
    prixH: 0,
    dateNaissance: '',
    adresse: '',
    email: '',
    numTel: '',
    password: '',
    cv: new CV,
    categorieFreelancer: new Categorie,
    roles: [],
    etat: true
  };
  listCat: Categorie[];
  image: any;
  client: Utilisateur = {
    id: 0,
    nom: '',
    prenom: '',
    prixH: 0,
    dateNaissance: '',
    adresse: '',
    email: '',
    numTel: '',
    password: '',
    cv: new CV,
    categorieFreelancer: new Categorie,
    roles: [],
    etat: true
  };
  constructor(private utilisateurService: UtilisateurService,  private catService: CategorieService
    , private router: Router) { }
  ngOnInit(): void {
    this.getAllCat()
  }
  selectedAccountType: any;
  toggleForm() {
  }
  addNewJobSeeker(form: NgForm) {
    this.utilisateurService.saveJobSeeker(this.freelancer).subscribe((data: Utilisateur) => {

      console.log(data)
      if (data !== null) {
        form.resetForm()
        this.router.navigate(['/login'],)
      } else {
        window.alert("Email exist deja !!")
      }
    })
  }
  addneClient(form: NgForm) {
   
    this.utilisateurService.saveClient(this.client).subscribe((data: Utilisateur) => {
      console.log(data)
      if (data !== null) {
        form.resetForm()
        this.router.navigate(['/login'],)
      } else {
        window.alert("Email exist deja !!")
      }

    })
  }
  onFileSelcted(event: any) {
    this.image = event.target.files[0]
    console.log(event.target.files[0])
  }
  getAllCat() {
    this.catService.getAllCateg().subscribe((data: Categorie[]) => {
      this.listCat = data
    })
  }
}
