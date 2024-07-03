import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/monClass/project';
import { Proposition } from 'src/app/monClass/proposition';
import { ProjetService } from 'src/app/monService/projet.service';
import { PropositionServie } from 'src/app/monService/proposition.service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {
  proplist: Proposition[];
   constructor(private propService:PropositionServie ){}
  ngOnInit(): void {
this.propService.getAllProposition().subscribe((data:Proposition[])=>{
  this.proplist=data
})
  }
}