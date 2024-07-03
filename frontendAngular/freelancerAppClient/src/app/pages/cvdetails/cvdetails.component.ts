import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
import { Review } from 'src/app/monClass/Review';
import { Utilisateur } from 'src/app/monClass/client';
import { CV } from 'src/app/monClass/cv';
 import { CvService } from 'src/app/monServices/cv.sevice';
import { ReviewService } from 'src/app/monServices/review.service';
import { UserAuthService } from 'src/app/monServices/user-auth-service';
import { UserService } from 'src/app/monServices/user-service';

@Component({
  selector: 'app-cvdetails',
  templateUrl: './cvdetails.component.html',
  styleUrls: ['./cvdetails.component.css']
})
export class CvdetailsComponent implements OnInit{
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
    categorieFreelancer: {
      id: 0,
      nomCat: '',
      sousCategories: []
    },
    roles: [],
    etat: false
  };
  taille: number;
  numberStart: any;
  constructor(    private reviewService:ReviewService,
                   private cvService:CvService ,
                    private router:Router, 
                    private activrout:ActivatedRoute , 
                    private authAdmin:UserAuthService,
                    private adminService:UserService  ){}
  id: number
  nomRoles: string;
  listReview: Review[];
  review: Review={
    id: '',
    dateCreation: '',
    content: '',
    start: 0,
    client: new Utilisateur,
    cv: new CV
  };
  cv: CV={
    id: 0,
    photo: '',
    resumer: '',
    titre: '',
    utilisateurs: {
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
    },
    experience: [],
    formation: [],
    langue: [],
    competance: []
  };
  ngOnInit(): void {
this.id=this.activrout.snapshot.params["id"]
this.cvService.getCvId(this.id).subscribe((data:CV)=>{
  this.cv=data;
  if(this.loginOrNot()){
    this.adminService.getUserInfo().subscribe((data:any)=>{
      console.log(data)
     this.utilisateur=data.userDetails
     })

  }
  this.allReview()
  this.getavg()
})
  }
  goToChat(id:number) {
    this.router.navigate(['/chat',{id}])
  }

loginOrNot(){
  return this.authAdmin.isLoggedIn();
}
public saveNewReview(form:NgForm){
  const formData = new FormData();
   formData.append('review', new Blob([JSON.stringify(this.review)], { type: 'application/json' }));

   formData.append('compId', this.cv.id.toString());
   formData.append('userId', this.utilisateur.id.toString());

  this.reviewService.addReview(formData).subscribe((data:Review)=>{
      console.log(data)
      if(data!==null){
        const id=data.cv.id
        this.router.navigate(['/cvdetails',{id}]).then(()=>{
          location.reload()
        })
      }else{
        alert("vous avez deja envoyer une review")
      }

      this.allReview()
  })
}
public allReview(){
  this.reviewService.listReviewByCv(this.id).subscribe((data:Review[])=>{
    this.listReview=data
    this.taille=this.listReview.length
 })

}
getavg(){
  this.reviewService.avergerating(this.id).subscribe((data:any)=>{
    this.numberStart=data
    console.log(data)
   })
}
}
