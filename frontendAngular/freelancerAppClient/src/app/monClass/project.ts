import { Categorie } from "./Categorie";
import {  Utilisateur } from "./client";

export class Project {
    id: number;
    title: string;
    skills: string;
    projectSize: string;
    workingIn: string;
    experience: string;
    workType: string;
    bedgutType: string;
    createdDate:string
    fixedPrice: number;
    description: string;
    client:Utilisateur; 
   categorieProjet:Categorie;
}