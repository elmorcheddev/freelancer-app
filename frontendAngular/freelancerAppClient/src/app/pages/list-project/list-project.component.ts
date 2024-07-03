import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
import { Project } from 'src/app/monClass/project';
import { CategorieService } from 'src/app/monServices/categorie.servic';
import { ProjetService } from 'src/app/monServices/projet.service';
import { UserAuthService } from 'src/app/monServices/user-auth-service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  id: number;
  listProjByCat: Project[] = [];
  listCat: Categorie[] = [];
  searchData: string;

  constructor(
    private projService: ProjetService,
    private catService: CategorieService,
    private router: Router,
    private userAuthService: UserAuthService,
    private activRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.loadProjectsByCategory(this.id);
      } else {
        this.loadAllProjects();
      }
    });
    this.getAllCategories();
  }

  loadProjectsByCategory(id: number): void {
    this.projService.getProjetByCat(id).subscribe(
      (data: Project[]) => {
        this.listProjByCat = data;
        console.log(data);
      },
      error => {
        console.error('Error loading projects by category', error);
      }
    );
  }

  loadAllProjects(): void {
    this.projService.getAllProjet().subscribe(
      (data: Project[]) => {
        this.listProjByCat = data;
        console.log(data);
      },
      error => {
        console.error('Error loading all projects', error);
      }
    );
  }

  getAllCategories(): void {
    this.catService.getAllCateg().subscribe(
      (data: Categorie[]) => {
        this.listCat = data;
      },
      error => {
        console.error('Error loading categories', error);
      }
    );
  }

  projectDetails(id: number): void {
    if (this.userAuthService.isLoggedIn()) {
      this.router.navigate(['/projectDetails', { id }]);
    } else {
      this.router.navigate(['/login']);
    }
  }

  getPrjByIdCat(id: number): void {
    this.router.navigate(['/listProject', { id }]);
  }

  filterCvs(prjs: Project[], searchTerm: string): Project[] {
    if (!searchTerm) return prjs;
    return prjs.filter(prj =>
      prj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prj.categorieProjet.nomCat.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prj.skills.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
