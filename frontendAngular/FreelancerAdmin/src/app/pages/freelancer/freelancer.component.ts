import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/monClass/client';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent implements OnInit {
  freelancer: Utilisateur[];
  constructor(private utilisateurService:UtilisateurService , private router:Router){}
  ngOnInit(): void {
    this.utilisateurService.getfreelancer().subscribe((data:Utilisateur[])=>{
      this.freelancer=data
    })
  }
  activeDesactive(id: number) {
    this.utilisateurService.changeEtat(id).subscribe((data:Utilisateur)=>{
     if(data.etat){
       alert("Compt utilisateur active ")
       this.router.navigate(['/freelancer']).then(()=>{
         location.reload()
       })
     }else{
       alert("Compt utilisateur desactive ")
       this.router.navigate(['/freelancer']).then(()=>{
         location.reload()}
   
        ) }
       })
     }
}