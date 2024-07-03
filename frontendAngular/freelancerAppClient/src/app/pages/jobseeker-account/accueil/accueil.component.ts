import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/monClass/project';
import { CvService } from 'src/app/monServices/cv.sevice';
import { ProjetService } from 'src/app/monServices/projet.service';
import { UserAuthService } from 'src/app/monServices/user-auth-service';
import { UserService } from 'src/app/monServices/user-service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent  implements OnInit {


  listProjectFreelancer: Project[];
  taille: number;
  constructor(private userAuthService:UserAuthService,
    private userService:UserService , 
               private projetService:ProjetService
               ,private cvService:CvService
                , private router:Router){}


   photo:any
   listProject: Project[];
listProjectByCat(id: number) {
  this.router.navigate(['/listProject',{id}])
}
public loginOrNot() {
  return this.userAuthService.isLoggedIn();
}
   ngOnInit(): void {
    if(this.userAuthService.isLoggedIn()){
      this.userService.getUserInfo().subscribe((data: any) => {

        this.projetService.getProjectByFreelancer(data.cv.id).subscribe((data:Project[])=>{
         console.log(data)
         this.listProjectFreelancer=data
         this.taille=data.length
        })
      })
    }
   
     this.getAllProjet()
   }
 
 
  getAllProjectByFreelancer(){
    this.projetService.getAllProjet().subscribe((data:Project[])=>{
      this.listProject=data
    })
  }
  getAllProjet(){
    this.projetService.getAllProjet().subscribe((data:Project[])=>{
      this.listProject=data
    })
  }
  getAllFreelancerByCat(id:number){
    if(this.userAuthService.isLoggedIn()){
      this.router.navigate(['/listfreelancerbycat',{id}])

    }else{

      this.router.navigate(['/login'])

    }
   }
   cvDetails(id: number) {
    if(this.userAuthService.isLoggedIn()){

    this.router.navigate(['/cvdetails',{id}])
     } else{

      this.router.navigate(['/login'])

    }
   }
   projectDeatils(id: number) {
    if(this.userAuthService.isLoggedIn()){

    this.router.navigate(['/projectDeatils',{id}])
  } else{

    this.router.navigate(['/login'])

  }
  }
 

goToAccueil() {
  this.router.navigate(['/accueilfreelancer'],)
}
   goToMyCV() {

    this.router.navigate(['/mycv'],)
  }
  goToMyProfils() {
    this.router.navigate(['/myprofils'],)
  }
  goToMyProposition() { 
    this.router.navigate(['/myprop'],)
  }
  goToProject(id:number){
    this.router.navigate(['/projectDeatils',{id}],)

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
