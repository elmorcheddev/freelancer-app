import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/monClass/client';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Utilisateur[];
  constructor(private utilisateurService:UtilisateurService , private router:Router){}
  ngOnInit(): void {
    this.utilisateurService.getClient().subscribe((data:Utilisateur[])=>{
      this.clients=data
    })
  }
  activeDesactive(id: number) {
 this.utilisateurService.changeEtat(id).subscribe((data:Utilisateur)=>{
  if(data.etat == true){
    alert("Compt utilisateur active ")
    this.router.navigate(['/client']).then(()=>{
      location.reload()
    })
  }else{
    alert("Compt utilisateur desactive ")
    this.router.navigate(['/client']).then(()=>{
      location.reload()}

     ) }
    })
  }
}
