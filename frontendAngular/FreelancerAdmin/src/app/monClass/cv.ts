import { CompetanceCv } from "./CompetanceCv";
import { Experience } from "./Experience";
import { Langue } from "./Langue";
import { Utilisateur } from "./client";
import { Formation } from "./formation";
 
export class CV {
	id: number;
	photo: string;
	resumer: string;
	titre: string;
	utilisateurs: Utilisateur
	experience: Experience[];
	formation: Formation[];
	langue: Langue[];
	competance: CompetanceCv[];
}