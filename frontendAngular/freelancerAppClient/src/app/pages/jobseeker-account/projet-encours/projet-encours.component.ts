import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CV } from 'src/app/monClass/cv';
import { Proposition } from 'src/app/monClass/proposition';
import { CvService } from 'src/app/monServices/cv.sevice';
import { PropositionServie } from 'src/app/monServices/proposition.service';
import { UserService } from 'src/app/monServices/user-service';

@Component({
  selector: 'app-projet-encours',
  templateUrl: './projet-encours.component.html',
  styleUrls: ['./projet-encours.component.css']
})
export class ProjetEncoursComponent implements OnInit {


  listprop: Proposition[];
  listpropAccepter: Proposition[];
  listpropRefuser: Proposition[];
  listpropEnattent: Proposition[];

  constructor(private router:Router   ,private propService:PropositionServie, private cvService:CvService,
     private userService:UserService
    ,   private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((data: any) => {

      this.cvService.getCvId(data.cv.id).subscribe((data: CV) => {
         console.log(data)
        this.propService.getAllPropositionByCvAccepter(data.id).subscribe((data:Proposition[])=>{
          console.log(data)
          this.listprop=data
        })
      
      
        
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
