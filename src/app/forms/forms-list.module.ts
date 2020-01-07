import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { MortgageOptionsComponent } from './mortgage-options/mortgage-options.component';
import { ValuationComponent } from './valuation/valuation.component';
import { MaterialDesignModule } from '../materialDesign/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HowToApplyComponent,
    MortgageOptionsComponent,
    ValuationComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  FormsRoutingModule,
  HowToApplyComponent,
  MortgageOptionsComponent,
  ValuationComponent
  ]
})
export class FormsListModule { }
