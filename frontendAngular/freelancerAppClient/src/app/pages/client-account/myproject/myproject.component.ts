import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
import { Utilisateur } from 'src/app/monClass/client';
import { CV } from 'src/app/monClass/cv';
 import { Project } from 'src/app/monClass/project';
import { CategorieService } from 'src/app/monServices/categorie.servic';
 import { ProjetService } from 'src/app/monServices/projet.service';
import { UserService } from 'src/app/monServices/user-service';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-myproject',
  templateUrl: './myproject.component.html',
  styleUrls: ['./myproject.component.css']
})
export class MyprojectComponent implements OnInit{





  id: number;
  client: Utilisateur={
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
  projet: Project={
    id: 0,
    title: '',
    skills: '',
    projectSize: '',
    workingIn: '',
    experience: '',
    workType: '',
    bedgutType: '',

    fixedPrice: 0,
    description: '',
    client: new Utilisateur,
    categorieProjet: new Categorie,
    createdDate: ''
  };
  listCat: Categorie[];
  listProj: Project[];
  message: string;
  constructor(private utilisateurService: UtilisateurService,private userService:UserService ,private catService:CategorieService,private projectService:ProjetService
    , private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getByIdClient()
   this.getAllCat()
  }
  public getByIdClient(){
    this.userService.getUserInfo().subscribe((data: any) => {
      this.projet.client.id=data.userDetails.id
        console.log(data.userDetails.id)
    this.projectService.getProjetByClient(data.userDetails.id).subscribe((data: Project[]) => {
      this.listProj = data;
       console.log(data)
    
  },
  (error:HttpErrorResponse)=>{
    if(error){
      this.message="SomeThing error, error code is "+error.status
    }
  })
})
  }
  goToMyProfils() {
    this.router.navigate(['/profilClient'])
   }
   
   goToMyProject(  ) {
    this.router.navigate(['/myproject'])
    }
    addProject(form: NgForm) {
      this.projectService.addNewProject(this.projet).subscribe((data:Project)=>{
        console.log(data)
        form.resetForm()
        this.getByIdClient()
      })
    }
    getAllCat() {
      this.catService.getAllCateg().subscribe((data: Categorie[]) => {
        this.listCat = data
      })
    }
    goToOffer() {
      this.router.navigate(['/offers'])
    }
    findProjectByID(id: number) {
      this.projectService.getProjectByID(id).subscribe((data:Project)=>{
        this.projet=data
      })
    }
    deleteProject(id: number) {
      this.projectService.deleteProjectByID(id).subscribe((data:Project)=>{
        console.log(data)
        if(data==null){
          alert("le projet et sont proposition a ete supprimer")
          this.router.navigate(['/myproject']).then(()=>{
            location.reload()
          })
        }
      })
    }
}
