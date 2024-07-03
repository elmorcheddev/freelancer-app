 import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
 import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { AuthRedirectGuard } from './auth/AuthRedirectGuard ';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './pages/category/category.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ClientComponent } from './pages/client/client.component';
import { FreelancerComponent } from './pages/freelancer/freelancer.component';
import { PropositionComponent } from './pages/proposition/proposition.component';

const routes: Routes = [
 
  {
    path: '',
    component: IndexComponent,
    canActivate: [AuthGuard],
     
  }, {
    path: 'home',
    component: IndexComponent,
    canActivate: [AuthGuard],
     
  },{
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuard],
     
  },
  {
    path: 'projets',
    component: ProjetsComponent,
    canActivate: [AuthGuard],
     
  },{
    path: 'client',
    component: ClientComponent,
    canActivate: [AuthGuard],
     
  },{
    path: 'freelancer',
    component: FreelancerComponent,
    canActivate: [AuthGuard],
     
  }
  ,{
    path: 'prop',
    component: PropositionComponent,
    canActivate: [AuthGuard],
     
  },
     { path: 'login', component: LoginComponent , canActivate: [AuthRedirectGuard]},
    { path: 'register', component: RegisterAdminComponent  , canActivate: [AuthRedirectGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
