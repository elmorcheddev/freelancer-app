import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 import { Admin } from 'src/app/monClass/admin';
import { Utilisateur } from 'src/app/monClass/client';
import { Project } from 'src/app/monClass/project';
import { Proposition } from 'src/app/monClass/proposition';
  import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { ProjetService } from 'src/app/monService/projet.service';
import { PropositionServie } from 'src/app/monService/proposition.service';
import { UtilisateurService } from 'src/app/monService/utilisateur.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  admin: Admin={
    id: 0,
    nom: '',
    prenom: '',
     email: '',
    password: '',
    roles: [],
   };
  roles: any;
  nomRoles: string;
  clients: number;
  freelancer: number;
  projets: number;
  proplist: number;
  
     constructor(private adminService:AdminService ,private utilisateurService:UtilisateurService ,
      private propService:PropositionServie
        ,private authAdmin:AdminAuthService,private projetService:ProjetService, private router:Router , private activatedRoute:ActivatedRoute){}

   ngOnInit() {
      
        if(this.authAdmin.isLoggedIn()){
          this.adminService.getUserInformation().subscribe((data:any)=>{
            console.log(data)
           this.admin=data
           });} 
     
  }
  
 loginOrNot(){
	return this.authAdmin.isLoggedIn();
}
logout(){
  this.router.navigate(['/login'])
  return this.authAdmin.clear()
}
 
  }
 
 
 


