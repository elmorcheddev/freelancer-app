import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/monServices/user-auth-service';
import { UserService } from 'src/app/monServices/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;
  utilisateur: any;

  constructor(
    private router: Router,
    private authAdmin: UserAuthService,
    private userServ: UserService,
    private userAuthService: UserAuthService
  ) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    this.userServ.loginUtilisateur(form.value).subscribe(
      (data: any) => {
        this.userAuthService.setRoles(data.utilisateur.roles);
        this.userAuthService.setToken(data.token);
        const role = data.utilisateur.roles[0].nomRole;
        const isActive = data.utilisateur.etat;
        console.log(isActive)
        
          if (role === 'FREELANCER' && isActive) {
            this.router.navigate(['/accueilfreelancer']).then(() => {
              window.alert("Vous avez connecté avec succès");
              location.reload();
            });
          } else if (role === 'CLIENT' && isActive) {
            this.router.navigate(['/profilClient']).then(() => {
              window.alert("Vous avez connecté avec succès");
              location.reload();
            });
          } 
          
         else if(!isActive) {
          window.alert("Votre compt est desactive ou bien le information incorrect ");

             this.authAdmin.clear();
           this.router.navigate(['/login']).then(() => {
             window.location.reload();
           });
        }
      },
      (error: HttpErrorResponse) => {
        if (error) {
          this.message = "Vérifiez votre username ou bien mot de passe";
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
