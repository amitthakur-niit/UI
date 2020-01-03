import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPaswordComponent } from './forgot-pasword/forgot-pasword.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
  path: 'login',
  component:LoginComponent
},
{
  path: 'register',
  component:RegisterComponent
},
{
  path: 'forgot-password',
  component:ForgotPaswordComponent
},
{
  path: 'logout',
  component:LogoutComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
