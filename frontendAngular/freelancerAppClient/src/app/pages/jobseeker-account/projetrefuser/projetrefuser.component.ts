import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CV } from 'src/app/monClass/cv';
import { Proposition } from 'src/app/monClass/proposition';
import { CvService } from 'src/app/monServices/cv.sevice';
import { PropositionServie } from 'src/app/monServices/proposition.service';
import { UserService } from 'src/app/monServices/user-service';

@Component({
  selector: 'app-projetrefuser',
  templateUrl: './projetrefuser.component.html',
  styleUrls: ['./projetrefuser.component.css']
})
export class ProjetrefuserComponent implements OnInit {


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
        this.propService.getAllPropositionByCvRefuser(data.id).subscribe((data:Proposition[])=>{
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
 
delete(id:number){
  this.propService.deleteProp(id).subscribe((data:Proposition)=>{
    console.log(data)
    if(data==null){
      alert("votre proposition a ete supprimer")

      this.router.navigate(['/projetenrefuser']).then(()=>{
        location.reload()
      })
    }
  })
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
