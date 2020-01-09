import { ForgotPaswordComponent } from './forgot-pasword/forgot-pasword.component';
import { RegisterComponent } from './register/register.component';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
   // MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialDesignModule

  ],
  exports: [RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPaswordComponent],
    providers: [],
})
export class AuthModule { }
