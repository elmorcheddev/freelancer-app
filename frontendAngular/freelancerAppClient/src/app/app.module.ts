import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FreelancerAccountComponent } from './pages/jobseeker-account/freelancer-account.component';
import { MycvComponent } from './pages/jobseeker-account/mycv/mycv.component';
import { ListProjectComponent } from './pages/list-project/list-project.component';
import { ClientAccountComponent } from './pages/client-account/client-account.component';
import { MyprojectComponent } from './pages/client-account/myproject/myproject.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.intercepter';
import { UserService } from './monServices/user-service';
import { ListFreelancerbycatComponent } from './pages/list-freelancerbycat/list-freelancerbycat.component';
import { CvdetailsComponent } from './pages/cvdetails/cvdetails.component';
import { CvlistComponent } from './pages/cvlist/cvlist.component';
import { AccueilComponent } from './pages/jobseeker-account/accueil/accueil.component';
import { ProjectDeatilsComponent } from './pages/project-deatils/project-deatils.component';
import { OffersComponent } from './pages/client-account/offers/offers.component';
import { MypropositionComponent } from './pages/jobseeker-account/myproposition/myproposition.component';
import { ChatComponent } from './pages/chat/ChatComponent';
import { ResultserarchComponent } from './pages/resultserarch/resultserarch.component';
import { ProjetEncoursComponent } from './pages/jobseeker-account/projet-encours/projet-encours.component';
import { ProjetenattentComponent } from './pages/jobseeker-account/projetenattent/projetenattent.component';
import { ProjetrefuserComponent } from './pages/jobseeker-account/projetrefuser/projetrefuser.component';
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    FreelancerAccountComponent,
    MycvComponent,
    ListProjectComponent,
    ClientAccountComponent,
    MyprojectComponent,
    ListFreelancerbycatComponent,
    CvdetailsComponent,
    CvlistComponent,
    AccueilComponent,
    ProjectDeatilsComponent,
    OffersComponent,
    MypropositionComponent,
    ChatComponent,
    ResultserarchComponent,
    ProjetEncoursComponent,
    ProjetenattentComponent,
    ProjetrefuserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,HttpClientModule
  ],
  providers:  [  AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true 
    
  },
  UserService],
  bootstrap: [AppComponent],
 })
export class AppModule { }
