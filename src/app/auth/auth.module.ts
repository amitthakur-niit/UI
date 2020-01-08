import { ForgotPaswordComponent } from './forgot-pasword/forgot-pasword.component';
import { RegisterComponent } from './register/register.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatSelectModule } from '@angular/material';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MaterialDesignModule } from '../materialDesign/material-design.module';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ForgotPaswordComponent
  ],
  imports: [
    CommonModule,
   AuthRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatListModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatButtonToggleModule
  ],
  exports: [//RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPaswordComponent],
    providers: [],
})
export class AuthModule { }
