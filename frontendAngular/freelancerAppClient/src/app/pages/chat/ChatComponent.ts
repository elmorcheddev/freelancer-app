import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Categorie } from 'src/app/monClass/Categorie';
import { Message } from 'src/app/monClass/Message';
import { Utilisateur } from 'src/app/monClass/client';
import { CV } from 'src/app/monClass/cv';
import { Proposition } from 'src/app/monClass/proposition';
import { MessageService } from 'src/app/monServices/MessageService';
import { PropositionServie } from 'src/app/monServices/proposition.service';
import { UserAuthService } from 'src/app/monServices/user-auth-service';
import { UserService } from 'src/app/monServices/user-service';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msglist: Message[] = [];
  listUtilisateur: Proposition[];
  admin: Utilisateur = {
    id: 0,
    nom: '',
    prenom: '',
    prixH: 0,
    dateNaissance: '',
    adresse: '',
    email: '',
    numTel: '',
    password: '',
    cv: new CV,
    categorieFreelancer: new Categorie,
    roles: [],
    etat: false
  };
  user: Utilisateur = {
    id: 0,
    nom: '',
    prenom: '',
    prixH: 0,
    dateNaissance: '',
    adresse: '',
    email: '',
    numTel: '',
    password: '',
    cv: new CV,
    categorieFreelancer: new Categorie,
    roles: [],
    etat: false
  };
  message: Message = {
    idMsg: 0,
    sender: {
      id: 0,
      nom: '',
      prenom: '',
      prixH: 0,
      dateNaissance: '',
      adresse: '',
      email: '',
      numTel: '',
      password: '',
      cv: new CV,
      categorieFreelancer: new Categorie,
      roles: [],
      etat: false
    },
    recipient: {
      id: 0,
      nom: '',
      prenom: '',
      prixH: 0,
      dateNaissance: '',
      adresse: '',
      email: '',
      numTel: '',
      password: '',
      cv: new CV,
      categorieFreelancer: new Categorie,
      roles: [],
      etat: false
    },
    content: '',
    timestamp: ''
  };

  id: any;
  listmsgAdmin: Message[] = [];
  listmsgUser: Message[] = [];
  role: string;

  constructor(
    private router: Router,
    private clientService: UserService,
    private clientAuthService: UserAuthService,
    private propService: PropositionServie,
    private messageService: MessageService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.clientAuthService.isLoggedIn()) {
      this.clientService.getUserInfo().subscribe((data: any) => {
        console.log(data);
        this.role = data.userDetails.roles[0].nomRole;
if(this.role=='FREELANCER'){
      this.propService.getAllPropositionByCv(data.cv.id).subscribe((data: Proposition[]) => {
          this.listUtilisateur = data;
          console.log(data);
        });
}else if(this.role='CLIENT'){
      this.propService.getAllPropositionByClientAccepter(data.userDetails.id).subscribe((data: Proposition[]) => {
          this.listUtilisateur = data;
          console.log(data);
        });
     
} });
    

    
    }

    this.getMessage(this.id);
  }

  public getMessage(id: number) {
    this.router.navigate(['/chat', { id }]);
    console.log(id);
    if (this.clientAuthService.isLoggedIn()) {
      this.clientService.getUserInfo().subscribe((data: any) => {
        this.message.sender.id = data.userDetails.id;
        this.message.recipient.id = id;

        const adminMessages$ = this.messageService.listMessageAdminUser(data.userDetails.id, id);
        const userMessages$ = this.messageService.listMessageAdminUser(id, data.userDetails.id);

        forkJoin([adminMessages$, userMessages$]).subscribe(
          ([adminMessages, userMessages]: [Message[], Message[]]) => {
            this.listmsgAdmin = adminMessages;
            this.listmsgUser = userMessages;
            this.mergeAndSortMessages();
          }
        );
      });
    }
  }

  private mergeAndSortMessages() {
    const mergedMessages = [...this.listmsgAdmin, ...this.listmsgUser];

    this.msglist = mergedMessages.sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });
  }

  public sendMessage(form: NgForm) {
    this.messageService.sendMessage(this.message).subscribe((data: Message) => {
      this.getMessage(this.message.recipient.id);
      this.message.content = '';
    });
  }
}
