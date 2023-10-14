import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestbranchComponent } from './testbranch/testbranch.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GradebookComponent } from './gradebook/gradebook.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestbranchComponent,
    RegistrationComponent,
    GradebookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
