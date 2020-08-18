import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { SignupPageComponent } from './login/signup-page/signup-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [

  {path : '' ,
  redirectTo : 'login' ,
   pathMatch : 'full'
  },
  {
    path: 'login' ,
   component : LoginPageComponent,
  },
  {path : 'signup' ,
   component : SignupPageComponent
  },
  {path : 'dashboard' ,
   component : DashboardComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
