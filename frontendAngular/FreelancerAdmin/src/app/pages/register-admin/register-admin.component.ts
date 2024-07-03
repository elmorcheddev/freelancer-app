import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
import { Admin } from 'src/app/monClass/admin';
import { Utilisateur } from 'src/app/monClass/client';
import { CV } from 'src/app/monClass/cv';
 import { UtilisateurService } from 'src/app/monService/utilisateur.service';
  
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent {
  message: string;
  admin: Utilisateur={
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    password: '',
    roles: [],
    prixH: 0,
    dateNaissance: '',
    adresse: '',
    numTel: '',
    cv: new CV,
    categorieFreelancer: new Categorie,
    etat: true
  };
constructor(private adminService:UtilisateurService , private router:Router){}
ngOnInit(): void {
 }
register(form: NgForm) {
  if (form.valid) {
 this.adminService.saveAdmin(this.admin).subscribe((data:Admin)=>{
  console.log(data)
  if(data!== null){
    this.router.navigate(['/login'])
  }else if(data==null){
    this.message="there is a account Admin exist "
    console.log(this.message)
  }
 })
}else {
  form.control.markAllAsTouched();
}
}

}
