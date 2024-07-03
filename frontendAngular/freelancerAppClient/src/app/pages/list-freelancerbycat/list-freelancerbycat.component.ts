import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CV } from 'src/app/monClass/cv';
 import { UserAuthService } from 'src/app/monServices/user-auth-service';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-list-freelancerbycat',
  templateUrl: './list-freelancerbycat.component.html',
  styleUrls: ['./list-freelancerbycat.component.css']
})
export class ListFreelancerbycatComponent implements OnInit{
  id: number;
 
  cvsByCategory:  CV[];
  constructor(private activRoute:ActivatedRoute , private userAuthService:UserAuthService
     , private router:Router,private freelancerService:UtilisateurService){}
  ngOnInit(): void {
 
   this.activRoute.params.subscribe(params => {
    this.id = +params['id'];  
    this.freelancerService.getFreelancerByCat(this.id).subscribe((data:CV[])=>{
        this.cvsByCategory=data
    })
     
    })
  
  }
  cvDetails(id: number) {
    if(this.userAuthService.isLoggedIn()){

    this.router.navigate(['/cvdetails',{id}])
     } else{

      this.router.navigate(['/login'])

    }
   }
}

