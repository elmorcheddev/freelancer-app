import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
import { Utilisateur } from 'src/app/monClass/client';
import { CV } from 'src/app/monClass/cv';
 import { CategorieService } from 'src/app/monServices/categorie.servic';
 import { UserAuthService } from 'src/app/monServices/user-auth-service';
import { UserService } from 'src/app/monServices/user-service';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listcat: Categorie[];
  userInfo: any;
  loginInUser: { id: any; username: any; email: any; role: any; } | null;
  message: string;
  utilisateur: Utilisateur={
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

  constructor(private catService:CategorieService  , 
              private userService: UserService,
              private utilisateurService:UtilisateurService, 
              private userAuthService: UserAuthService, 
              private router: Router,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    if(this.userAuthService.isLoggedIn()){
      this.userService.getUserInfo().subscribe((data: any) => {
        this.userInfo=data.userDetails
        console.log(data)
        this.utilisateurService.getByIdClient(data.userDetails.id).subscribe((data: Utilisateur) => {
         this.utilisateur = data;
          console.log(data)
       })})
    }
    
     
  
      
    this.getAllCat()

  }
  getAllCat(){
    this.catService.getAllCateg().subscribe((data:Categorie[])=>{
      this.listcat=data
      console.log(data)
    })
  }
  private updateUserInfo(): void {
    this.userService.getUserInfo().subscribe((data: any) => {
       const email = data.userDetails.email;
      this.userService.getUserDetails(email).subscribe((userData: any) => {
        console.log(data)
        this.userInfo = userData;
        this.cdr.detectChanges(); 
      });
    });
  }
  listProjectByCat(id: number) {
    this.router.navigate(['/listProject',{id}])
  }
  listAllProject() {
    this.router.navigate(['/listProject'])
  }
  public loginOrNot() {
    return this.userAuthService.isLoggedIn();
  }
  getAllFreelancerByCat(id:number){
    this.router.navigate(['/cvlist',{id}])  
   }
  

  logout(): void {
    alert(" bye bye ")
    this.router.navigate(['/login']).then(()=>{
      this.userAuthService.clear();
      this.userInfo = null;
    });
   }

  goOfferByCat(id: number): void {
   }

  goToMyProfildemandeur(): void {
    this.router.navigate(['/accueilfreelancer']);
  }

  goToMyProfilEmployeur(): void {
    this.router.navigate(['/profilClient']);
  }
  goToChat(id:number) {
    this.router.navigate(['/chat',{id}])
  }
}
