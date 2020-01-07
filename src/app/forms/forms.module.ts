import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { PropertyDetailsComponent } from './property-details/property-details.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class FormsModule { }
