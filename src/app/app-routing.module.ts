import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FamilynamesComponent } from './familynames/familynames.component';
import { GradebookComponent } from './gradebook/gradebook.component';
import { ClassRegistrationComponent } from './classregistration/classregistration.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'familyname', component: FamilynamesComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'Gradebook', component: GradebookComponent},
  {path: 'classregistration', component: ClassRegistrationComponent},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
