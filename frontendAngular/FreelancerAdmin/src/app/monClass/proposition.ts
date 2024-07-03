 import { Utilisateur } from "./client";
import { CV } from "./cv";
 import { Project } from "./project";

export class Proposition {
    id:number;
    titre:string
    lettreMotivation:string ;
    price:number
    workIn:number
    sendingDate:string
    portfolioLink:string
    accepter:boolean
    refuser:boolean 
    enattent:boolean
    project:Project
    cv:CV
    client:Utilisateur

}