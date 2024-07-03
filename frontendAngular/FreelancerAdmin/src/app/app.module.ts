import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from'@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
 import { IndexComponent } from './pages/index/index.component';
 import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.intercepter';
import { AdminService } from './monService/admin.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './pages/category/category.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { ClientComponent } from './pages/client/client.component';
import { FreelancerComponent } from './pages/freelancer/freelancer.component';
import { PropositionComponent } from './pages/proposition/proposition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     IndexComponent,
     LoginComponent,
    RegisterAdminComponent,
    CategoryComponent,
    ProjetsComponent,
    ClientComponent,
    FreelancerComponent,
    PropositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule,FormsModule,
    HttpClientModule,MatCardModule, BrowserAnimationsModule
  ],
  providers: [  AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true 
    
  },
  AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
