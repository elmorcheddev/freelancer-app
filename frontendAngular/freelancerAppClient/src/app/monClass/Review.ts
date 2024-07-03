import { Utilisateur } from "./client";
import { CV } from "./cv";

 
export class Review {
    id: string;
    dateCreation: string;
    content: string;
    start: number;
    client: Utilisateur;
    cv: CV;
}