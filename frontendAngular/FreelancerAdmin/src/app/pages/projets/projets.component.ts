import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/monClass/project';
import { ProjetService } from 'src/app/monService/projet.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projets: Project[];
  constructor(private projetService:ProjetService ){}
  ngOnInit(): void {
this.projetService.getAllProjet().subscribe((data:Project[])=>{
  this.projets=data
})
  }

}
