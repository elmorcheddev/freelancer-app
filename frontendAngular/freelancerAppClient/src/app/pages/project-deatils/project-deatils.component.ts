import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
import { Utilisateur } from 'src/app/monClass/client';
 import { CV } from 'src/app/monClass/cv';
 import { Project } from 'src/app/monClass/project';
import { Proposition } from 'src/app/monClass/proposition';
import { CvService } from 'src/app/monServices/cv.sevice';
 import { ProjetService } from 'src/app/monServices/projet.service';
import { PropositionServie } from 'src/app/monServices/proposition.service';
import { UserService } from 'src/app/monServices/user-service';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-project-deatils',
  templateUrl: './project-deatils.component.html',
  styleUrls: ['./project-deatils.component.css']
})
export class ProjectDeatilsComponent {

  id:number
  prj: Project={
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
  listPRJ: Project[];
  listProj: Project[];
  propsition: Proposition ={
    id: 0,
    lettreMotivation: '',
    price: 0,
    portfolioLink: '',
    accepter: false,
    refuser: false,
    enattent: true,
    project: new Project,
    cv: new CV,
    titre: '',
    client: new Utilisateur,
    sendingDate: '',
    workIn:0
  };
  cv: CV={
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
  constructor(private activRoute:ActivatedRoute,private router:Router , private userService:UserService, 
    private utilisateurService:UtilisateurService,
    private cvService:CvService,
    private propositionService:PropositionServie ,  private prjService:ProjetService){}
  ngOnInit(): void {
    this.activRoute.params.subscribe(params => {
      this.id = +params['id'];  
        this.prjService.getProjectByID(this.id).subscribe((data:Project)=>{
        this.prj=data
        this.propsition.project.id=data.id
        this.propsition.client.id=data.client.id
      
    })})
    this.userService.getUserInfo().subscribe((data: any) => {
      if(data.cv != null){
        this.cvService.getCvId(data.cv.id).subscribe((data: CV) => {
          console.log(data)
          this.cv = data;
          this.propsition.cv.id=data.id
        })
      }
    })
  }
  gotoProject(id: number) {

    this.router.navigate(['/projectDeatils',{id}])
  }
  sendProposition(form:NgForm){
    this.propositionService.sendProposition(this.propsition).subscribe((data:Proposition)=>{
      console.log(data)
      if(data === null){
        window.alert("vous deja postuler a cette projet ")  
        const id = this.prj.id   
        this.router.navigate(['/projectDeatils',{id}]).then(()=>{
          location.reload()
        })
      }else{
        window.alert("votres proposition a ete envoyer  a cette projet ")  
        const id = this.prj.id  
        this.router.navigate(['/projectDeatils',{id}]).then(()=>{
          location.reload()
        })
      }
    })
  }
}
