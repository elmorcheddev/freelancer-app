import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import {    UtilisateurService } from 'src/app/monServices/utilisateur.service';
import { UserService } from 'src/app/monServices/user-service';
import { Utilisateur } from 'src/app/monClass/client';
import { CV } from 'src/app/monClass/cv';
import { Categorie } from 'src/app/monClass/Categorie';

@Component({
  selector: 'app-client-account',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent  implements OnInit{



  id: number;
  client: Utilisateur={
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
    etat: false
  };
  constructor(private utilisateurService: UtilisateurService ,private userService:UserService
    , private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((data: any) => {

     this.utilisateurService.getByIdClient(data.userDetails.id).subscribe((data: Utilisateur) => {
      this.client = data;
       console.log(data)
    })})
  }
  goToMyProfils() {
    this.router.navigate(['/profilClient'])
   }
   
   goToMyProject() {
    this.router.navigate(['/myproject'])
    }
    goToOffer() {
      this.router.navigate(['/offers'])
    }
}
