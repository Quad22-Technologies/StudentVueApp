import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLogin } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

userlogin:UserLogin = {};/*initializing a new object*/
  constructor(private router:Router) { }
  ngOnInit(): void {}


  submit() {
    this.userlogin.username= this.LoginForm.controls.username.value
    this.userlogin.password= this.LoginForm.controls.password.value
    console.log("testing: ", this.userlogin.username);
    console.log("testing1: ", this.userlogin.password);
    console.log(this.userlogin)
    console.log(this.LoginForm)
    if(!this.userlogin.username){
      alert("Fill out requirements")
    }
    else if(!this.userlogin.password){
      alert("Fill out requirements")
    }
    else{
      this.router.navigate(['/Gradebook']);
    }


  }
}
