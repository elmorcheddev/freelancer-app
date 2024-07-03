import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
import { CV } from 'src/app/monClass/cv';
import { Project } from 'src/app/monClass/project';
import { Proposition } from 'src/app/monClass/proposition';
import { CategorieService } from 'src/app/monServices/categorie.servic';
import { CvService } from 'src/app/monServices/cv.sevice';
import { ProjetService } from 'src/app/monServices/projet.service';
import { PropositionServie } from 'src/app/monServices/proposition.service';
import { UserAuthService } from 'src/app/monServices/user-auth-service';
import { UserService } from 'src/app/monServices/user-service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listProjectFreelancer: Proposition[];
  taille: number;
  listCat: Categorie[];
  listCV: CV[];
  listProject: Project[];
  selectedCategory: any 

  constructor(
    private userAuthService: UserAuthService,
    private userService: UserService, 
    private catService: CategorieService, 
    private propService:PropositionServie,
    private projetService: ProjetService,
    private cvService: CvService, 
    private router: Router
  ){}

  ngOnInit(): void {
    if (this.userAuthService.isLoggedIn()) {
      this.userService.getUserInfo().subscribe((data: any) => {
        if (data.cv != null) {
          this.propService.getAllPropositionAccepter().subscribe((data: Proposition[]) => {
            console.log(data);
            this.listProjectFreelancer = data;
            this.taille = data.length;
          });
        }else {
          this.projetService.getAllProjet().subscribe((data: Project[]) => {
            this.listProject = data;
            console.log(data);
          });
        }
      });
    } else {
      this.projetService.getAllProjet().subscribe((data: Project[]) => {
        this.listProject = data;
        console.log(data);
      });
    }
   
    this.getAllCat();
    this.getAllFreelancerByRoles();
  }

  getAllCat() {
    this.catService.getAllCateg().subscribe((data: Categorie[]) => {
      this.listCat = data;
      console.log(data);
    });
  }

  getAllFreelancerByRoles() {
    this.cvService.getAllCv().subscribe((data: CV[]) => {
      this.listCV = data;
      console.log(data);
    });
  }

  getAllFreelancerByCat(id: number) {
    if (this.userAuthService.isLoggedIn()) {
      this.router.navigate(['/cvlist', { id }]);
    } else {
      this.router.navigate(['/login']);
    }
  }

  cvDetails(id: number) {
    if (this.userAuthService.isLoggedIn()) {
      this.router.navigate(['/cvdetails', { id }]);
    } else {
      this.router.navigate(['/login']);
    }
  }

  projectDeatils(id: number) {
    if (this.userAuthService.isLoggedIn()) {
      this.router.navigate(['/projectDeatils', { id }]);
    } else {
      this.router.navigate(['/login']);
    }
  }

  onCategoryInput(value: any) {
    this.selectedCategory = this.listCat.find(cat => cat.nomCat === value.target.value);
  }
  public loginOrNot() {
    return this.userAuthService.isLoggedIn();
  }
  searchCategory() {
    if (this.selectedCategory) {
      this.listProjectByCat(this.selectedCategory.id);
    } else {
      alert('Please select a valid category');
    }
  }

  listProjectByCat(id: number) {
    this.router.navigate(['/listProject', { id }]);
  }
}
