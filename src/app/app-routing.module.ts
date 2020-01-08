import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToApplyComponent } from './forms/how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './forms/mortgage-options/mortgage-options.component';
import { ValuationComponent } from './forms/valuation/valuation.component';
import { ForgotPaswordComponent } from './auth/forgot-pasword/forgot-pasword.component';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';






const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {

    path: 'login',
    component: HowToApplyComponent
   },

  {

    path: 'how-to-apply',
    component: HowToApplyComponent
   },
   {
    path: 'forgot-password',
    component: ForgotPaswordComponent
   },
  {
    path: 'mortgage-options',
  component: MortgageOptionsComponent },
  {
    path : '',
  redirectTo:'/login',
  pathMatch : 'full'
  },

  {
    path : 'forms',
    loadChildren : './forms/forms-list.module#FormsListModule'
  } ,
  {
    path : 'auth',
    loadChildren : './auth/auth.module#AuthModule'
  }


  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
