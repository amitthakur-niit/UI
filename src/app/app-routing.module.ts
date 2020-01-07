import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream


=======
import { HowToApplyComponent } from './forms/how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './forms/mortgage-options/mortgage-options.component';
import { ValuationComponent } from './forms/valuation/valuation.component';
import { PropertyDetailsComponent } from './forms/property-details/property-details.component';
>>>>>>> Stashed changes


const routes: Routes = [
  {
    path : '',
  redirectTo:'/login',
  pathMatch : 'full'},
  {
    path : 'forms',
    loadChildren : './forms/forms-list.module#FormsListModule'
  } ,
  {
    path : 'auth',
    loadChildren : './auth/auth.module#AuthModule'
<<<<<<< Updated upstream
  }
=======
  },
  {
    path : 'property-details',
    component : PropertyDetailsComponent
  },
  
>>>>>>> Stashed changes


  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
