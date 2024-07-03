import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
import { Utilisateur } from 'src/app/monClass/client';
import { CV } from 'src/app/monClass/cv';
 import { UserService } from 'src/app/monServices/user-service';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-freelancer-account',
  templateUrl: './freelancer-account.component.html',
  styleUrls: ['./freelancer-account.component.css']
})
export class FreelancerAccountComponent implements OnInit {
 
  id: number
  freelancer: Utilisateur={
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
  constructor(private freelancerService: UtilisateurService , private userService:UserService
    , private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((data: any) => {

     this.freelancerService.getByIdJobseeker(data.userDetails.id).subscribe((data: Utilisateur) => {
      this.freelancer = data;
       console.log(data)
    })})
  }
  goToMyCV() {

    this.router.navigate(['/mycv'],)
  }
  goToMyProposition() { 
    this.router.navigate(['/myprop'],)
  }
 

  goToAccueil() {
    this.router.navigate(['/accueilfreelancer'],)
  }
   
  goToMyProfils() {
    this.router.navigate(['/myprofils'],)
  }
  goToMyProjetencours() {
    this.router.navigate(['/projetencours'],)
    }
    goToMyProjetRefuser() {
      this.router.navigate(['/projetenrefuser'],)
    }
      goToMyProjetenAttent() {
        this.router.navigate(['/projetenAttent'],)
      }
}
