import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




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
  }


  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
