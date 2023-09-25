import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestbranchComponent } from './testbranch/testbranch.component';

const routes: Routes = [
  {path:'login', component:LoginComponent}, 
  {path:'testbranch', component:TestbranchComponent},
   {path:'registration', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
