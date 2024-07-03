import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Categorie } from 'src/app/monClass/Categorie';
import { CompetanceCv } from 'src/app/monClass/CompetanceCv';
import { Experience } from 'src/app/monClass/Experience';
import { Langue } from 'src/app/monClass/Langue';
import { Utilisateur } from 'src/app/monClass/client';
import { CV } from 'src/app/monClass/cv';
import { Formation } from 'src/app/monClass/formation';
 import { CompService } from 'src/app/monServices/Competance.service';
import { CvService } from 'src/app/monServices/cv.sevice';
import { ExperienceService } from 'src/app/monServices/experience.service';
import { FormationService } from 'src/app/monServices/formation.service';
 import { LangueService } from 'src/app/monServices/langue.service';
import { UserAuthService } from 'src/app/monServices/user-auth-service';
import { UserService } from 'src/app/monServices/user-service';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.css']
})
export class MycvComponent implements OnInit {
goToMyProjetRefuser() {
throw new Error('Method not implemented.');
}
goToMyProjetenAttent() {
throw new Error('Method not implemented.');
}
goToMyProjetencours() {
throw new Error('Method not implemented.');
}
 

  formation: Formation = {
    id: 0,
    formationName: '',
    etablissement: '',
    ville: '',
    dateObtenation: '',
    cv: new CV
  };


  id: number
  cv: CV = {
    id: 0,
    photo: '',
    resumer: '',
    titre: '',
    utilisateurs: {
      id: 0,
      nom: '',
      prenom: '',
      dateNaissance: '',
      adresse: '',
      email: '',
      numTel: '',
      password: '',
      roles: [],
      cv: new CV,
      categorieFreelancer: {
        id: 0,
        nomCat: '',
        sousCategories: []
      },
      prixH: 0,
      etat: false
    },
    formation: [],
    experience: [],
    langue: [],
    competance: []
  };
  listFormation: Formation[];
  image: string | Blob;
  listExp: Experience[];
  experience: Experience = {
    id: 0,
    titre: '',
    nomSte: '',
    ville: '',
    dateDebut: '',
    dateFin: '',
    description: '',
    cv: new CV
  };
  langue: Langue = {
    id: 0,
    nomLangue: '',
    niveauLangue: '',
    cv: new CV
  };
  info: CV = {
    id: 0,
    photo: '',
    resumer: '',
    titre: '',
    utilisateurs: new Utilisateur,
    experience: [],
    formation: [],
    langue: [],
    competance: []
  };
  com: CompetanceCv={
    id: 0,
    nomCompetance: '',
    cv: new CV
  };

  constructor(private freelancerService: UtilisateurService,
    private router: Router,
    private userService: UserService,
    private expServices: ExperienceService,
    private formationService: FormationService,
    private userAuthService: UserAuthService,
    private activatedRoute: ActivatedRoute,
    private langService: LangueService,
    private cvService: CvService,
  private competanceService:CompService) { }
  ngOnInit(): void {

    this.getCvByUtilisateur()
  }
  public getCvByUtilisateur() {
    if (this.userAuthService.isLoggedIn()) {
      this.userService.getUserInfo().subscribe((data: any) => {
        console.log(data.cv)

        this.info = data.cv
        this.cv = this.info;
        this.experience.cv.id = this.info.id
        this.formation.cv.id = this.info.id
        this.langue.cv.id = this.info.id
        this.com.cv.id=this.info.id

      });

    }
  }

  addnewFormation(form: NgForm) {
    this.formationService.addNewFormation(this.formation).subscribe((data: Formation) => {
      console.log(data)
      if (data !== null) {
        window.alert("formation ajouter avec success")
        this.router.navigate(['/mycv']).then(()=>{
          location.reload()
        })
      
      }


    })
  }
  addnewExp(form: NgForm) {
    this.expServices.saveNewExper(this.experience).subscribe((data: Experience) => {
      console.log(data)
      if (data !== null) {
        window.alert("Experience ajouter avec success")
        this.router.navigate(['/mycv']).then(()=>{
          location.reload()
        })
      
      }


    })
  }
  addnewLangue(form: NgForm) {
    this.langService.saveNewLangue(this.langue).subscribe((data: Langue) => {
      console.log(data)
      if (data !== null) {
        window.alert("Langue ajouter avec success")
        this.router.navigate(['/mycv']).then(()=>{
          location.reload()
        })
      
      }


    })
  }
  addNewComp(form: NgForm) {
    this.competanceService.saveNewCom(this.com).subscribe((data: CompetanceCv) => {
      console.log(data)
      if (data !== null) {
        window.alert("Competance ajouter avec success")
        this.router.navigate(['/mycv']).then(()=>{
          location.reload()
        })
      
      }


    })
  }
  addnewCvForJobSeeker(form: NgForm) {
    const formData = new FormData();
    formData.append('photo', this.image);
    formData.append('cv', new Blob([JSON.stringify(this.cv)], { type: 'application/json' }));
    this.cvService.addNewCv(formData).subscribe((data: CV) => {
      if (data !== null) {
        window.alert("Cv ajouter avec success")
        this.router.navigate(['/mycv']).then(()=>{
          location.reload()
        })
      
      }

    })
  }
  goToMyCV() {

    this.router.navigate(['/mycv'])


  }

  goToAccueil() {
    this.router.navigate(['/accueilfreelancer'],)
  }

  goToMyProfils() {
    this.router.navigate(['/myprofils'],)
  }
  onFileSelected(event: any) {
    this.image = event.target.files[0]
    console.log(event.target.files[0])
  }
  goToMyProposition() { 
    this.router.navigate(['/myprop'],)
  }
}





