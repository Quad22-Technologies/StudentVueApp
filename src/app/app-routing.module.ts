import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestbranchComponent } from './testbranch/testbranch.component';

const routes: Routes = [
  {path:'login', component:LoginComponent}, 
  {path:'testbranch', component:TestbranchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
