import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowToApplyComponent } from './forms/how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './forms/mortgage-options/mortgage-options.component';
import { ValuationComponent } from './forms/valuation/valuation.component';
import { ForgotPaswordComponent } from './auth/forgot-pasword/forgot-pasword.component';


const routes: Routes = [
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
    path : 'valuation',
    component : ValuationComponent
  },
  {
    path : 'auth',
    loadChildren : './auth/auth.module#AuthModule'
  },


  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
