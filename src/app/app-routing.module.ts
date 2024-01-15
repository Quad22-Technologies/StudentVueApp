import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestbranchComponent } from './familynames/testbranch.component';
import { GradebookComponent } from './gradebook/gradebook.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'testbranch', component:TestbranchComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'Gradebook', component:GradebookComponent},
  {path:'schedule', component:ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
