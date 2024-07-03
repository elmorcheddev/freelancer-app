import { Categorie } from "./Categorie";
import { CV } from "./cv";
import { Project } from "./project";

export class Utilisateur {
    id: number;
    nom: string;
    prenom: string;
    prixH: number;
    dateNaissance: string;
    adresse: string;
    email: string;
    numTel: string;
    password: string;
    etat:boolean

    cv: CV;
    categorieFreelancer: Categorie;

    roles: [];
}
