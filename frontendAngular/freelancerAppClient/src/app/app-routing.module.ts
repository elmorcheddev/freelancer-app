import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FreelancerAccountComponent } from './pages/jobseeker-account/freelancer-account.component';
import { MycvComponent } from './pages/jobseeker-account/mycv/mycv.component';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { ClientAccountComponent } from './pages/client-account/client-account.component';
import { MyprojectComponent } from './pages/client-account/myproject/myproject.component';
import { ListFreelancerbycatComponent } from './pages/list-freelancerbycat/list-freelancerbycat.component';
import { CvdetailsComponent } from './pages/cvdetails/cvdetails.component';
import { CvlistComponent } from './pages/cvlist/cvlist.component';
import { AccueilComponent } from './pages/jobseeker-account/accueil/accueil.component';
import { ProjectDeatilsComponent } from './pages/project-deatils/project-deatils.component';
import { OffersComponent } from './pages/client-account/offers/offers.component';
import { AuthGuard } from './auth/auth.guard';
import { MypropositionComponent } from './pages/jobseeker-account/myproposition/myproposition.component';
import { ChatComponent } from './pages/chat/ChatComponent';
import { ProjetEncoursComponent } from './pages/jobseeker-account/projet-encours/projet-encours.component';
import { ProjetrefuserComponent } from './pages/jobseeker-account/projetrefuser/projetrefuser.component';
import { ProjetenattentComponent } from './pages/jobseeker-account/projetenattent/projetenattent.component';
 
const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"myprofils", component:FreelancerAccountComponent , canActivate: [AuthGuard]},
  {path:"projetencours", component:ProjetEncoursComponent , canActivate: [AuthGuard]},
  {path:"projetenrefuser", component:ProjetrefuserComponent , canActivate: [AuthGuard]},
  {path:"projetenAttent", component:ProjetenattentComponent , canActivate: [AuthGuard]},
  {path:"profilClient", component:ClientAccountComponent  ,canActivate: [AuthGuard]},
  {path:"myproject", component:MyprojectComponent  ,canActivate: [AuthGuard]},
   {path:"mycv", component:MycvComponent  ,canActivate: [AuthGuard]},
  {path:"listProject", component:ListProjectComponent},
  {path:"listfreelancerbycat", component:ListFreelancerbycatComponent},
  {path:"cvdetails", component:CvdetailsComponent },
  {path:"cvlist", component:CvlistComponent},
  {path:"accueilfreelancer", component:AccueilComponent  ,canActivate: [AuthGuard]},
  {path:"projectDeatils", component:ProjectDeatilsComponent , canActivate: [AuthGuard]} , 
  {path:"offers", component:OffersComponent  ,canActivate: [AuthGuard]},
  {path:"myprop", component:MypropositionComponent  ,canActivate: [AuthGuard]},
  {path:"chat", component:ChatComponent  ,canActivate: [AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
