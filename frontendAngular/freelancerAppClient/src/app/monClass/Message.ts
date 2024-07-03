import { Utilisateur } from "./client";

 
 
export interface Message{
	 idMsg:number;

  sender:Utilisateur;

 recipient:Utilisateur;

 content:string;

timestamp:string;
}