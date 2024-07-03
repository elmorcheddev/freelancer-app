import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proposition } from 'src/app/monClass/proposition';
import { CategorieService } from 'src/app/monServices/categorie.servic';
 import { ProjetService } from 'src/app/monServices/projet.service';
import { PropositionServie } from 'src/app/monServices/proposition.service';
import { UserService } from 'src/app/monServices/user-service';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


  listProposition: Proposition[];
  message: string;
  constructor(private utilisateurService: UtilisateurService,private userService:UserService ,
    private propSerivice:PropositionServie  ,
    private catService:CategorieService,private projectService:ProjetService
    , private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getByIdClient()
  }
  public getByIdClient(){
    this.userService.getUserInfo().subscribe((data: any) => {
      this.propSerivice.getAllProposition(data.userDetails.id).subscribe((data: Proposition[]) => {
        // Sort the propositions by project
        data.sort((a, b) => {
          if (a.project && b.project) {
            // Compare projects by their titles
            const projectA = a.project.title.toUpperCase();
            const projectB = b.project.title.toUpperCase();
            if (projectA < projectB) {
              return -1;
            }
            if (projectA > projectB) {
              return 1;
            }
            return 0;
          } else {
            return 0; // If projects are not available, maintain the original order
          }
        });
    
        this.listProposition = data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        if (error) {
          this.message = "Something went wrong, error code is " + error.status;
        }
      });
    });
    
  }
  
  goToOffer() {
    this.router.navigate(['/offers'])
  }
  goToMyProfils() {
    this.router.navigate(['/profilClient'])
   }
   goToMyProject() {
    this.router.navigate(['/myproject'])
    }
  
    descoverCv(id: number) {
      this.router.navigate(['/cvdetails',{id}])
      }
    refuser(id: number) {
      this.propSerivice.refuser(id).subscribe((data:Proposition)=>{
        console.log(data)
        if(data.refuser== true && data.accepter==false){
          window.alert("Proposition de " + data.cv.utilisateurs.nom +" "+ data.cv.utilisateurs.prenom+" a ete refuser")
          this.router.navigate(['/offers']).then(()=>{
            location.reload()
          })
        } 
      })
    }
      accepter(id: number) {
        this.propSerivice.accpeter(id).subscribe((data:Proposition)=>{
          console.log(data)
          console.log(data)
          if(data.refuser== false && data.accepter==true){
            window.alert("Proposition de " + data.cv.utilisateurs.nom +" "+ data.cv.utilisateurs.prenom+" a ete Accepter")
            this.router.navigate(['/offers']).then(()=>{
              location.reload()
            })
          } 
        })      
      }
      
}
