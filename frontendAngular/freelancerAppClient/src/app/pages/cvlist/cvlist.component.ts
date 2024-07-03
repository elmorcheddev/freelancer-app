import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CV } from 'src/app/monClass/cv';
import { CvService } from 'src/app/monServices/cv.sevice';
import { filter } from 'rxjs/operators';
import { Categorie } from 'src/app/monClass/Categorie';
import { CategorieService } from 'src/app/monServices/categorie.servic';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-cvlist',
  templateUrl: './cvlist.component.html',
  styleUrls: ['./cvlist.component.css']
})
export class CvlistComponent implements OnInit{

  searchData: string = '';
     listAllCV: CV[];
  listCat: Categorie[];
  id: number;
  cvsByCategory: CV[];
     filterCvs(cvs: CV[], searchTerm: string): CV[] {
       return cvs.filter(cv =>
        cv.utilisateurs.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cv.utilisateurs.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cv.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cv.competance.some(skill => skill.nomCompetance.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
goToCvDetails(id: number) {
  this.router.navigate(['/cvdetails',{id}])
}
 
  ngOnInit(): void {
    this.cvService.getAllCv().subscribe((rep:CV[])=>{
      this.listAllCV=rep
      console.log(rep)
    })
    
   this.activRoute.params.subscribe(params => {
    this.id = +params['id'];  
    this.freelancerService.getFreelancerByCat(this.id).subscribe((data:CV[])=>{
        this.cvsByCategory=data
    })
     
    })
    this.getAllCat()
  }
  getAllCat(){
    this.catService.getAllCateg().subscribe((data:Categorie[])=>{
      this.listCat=data
      console.log(data)
    })
  }
constructor(private cvService:CvService,private freelancerService:UtilisateurService ,private activRoute:ActivatedRoute, private router:Router , private catService:CategorieService){
 
 }
 getFreelancerByCat(id: number) {
  this.router.navigate(['/cvlist',{id}])
   }
}
