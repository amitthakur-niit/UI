import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { ValuationComponent } from './valuation/valuation.component';


const routes: Routes = [
  {
    path: 'how-to-apply',
    component: HowToApplyComponent
   },
  {
    path: 'mortgage-options',
  component: MortgageOptionsComponent },
  {
    path : 'valuation',
    component : ValuationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
