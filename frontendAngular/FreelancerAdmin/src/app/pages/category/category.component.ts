import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/monClass/Categorie';
import { CategorieService } from 'src/app/monService/categorie.servic';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  listCat: Categorie[];
  cat: Categorie={
    id: 0,
    nomCat: '',
    sousCategories: []
  };
  constructor(private catService:CategorieService , private router:Router){}
  ngOnInit(): void {
this.catService.getAllCateg().subscribe((data:Categorie[])=>{
  this.listCat=data
})
  }
  ajouterCat(form:NgForm){
    this.catService.ajouterCat(this.cat).subscribe((data:Categorie)=>{
      console.log(data)
      if(data!= null){
       window.alert("categories ajouter avec success")
        this.router.navigate(['/category']).then(()=>{
          location.reload()
        })
      }else{
        window.alert("categories Exist deja ")

      }
    })
  }
  modifierCat(id:number){
    this.catService.byIdCat(id).subscribe((data:Categorie)=>{
      this.cat=data
    })
  }
}
