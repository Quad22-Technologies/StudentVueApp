import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestbranchComponent } from './testbranch/testbranch.component';
import { GradebookComponent } from './gradebook/gradebook.component';
import { ProfileComponent } from './studentprofile/profile.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'testbranch', component:TestbranchComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'Gradebook', component:GradebookComponent},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
