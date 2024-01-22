import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { gradelist } from '../models/gradelist';
import { GradeListService } from '../services/gradelist.service';
import { UsersApiService } from '../services/users.service';

import { regObj } from '../models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss' ]
})

export class RegistrationComponent {

  form = new FormGroup({ //Add your Form controls to this section so you can use them in the typescript
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    gradelist: new FormControl('')
  });

  //instatiate the objects
  regObj: regObj = {};
  gradelist: gradelist[] = [];
  response: string = ""; // response given after sending
  hideResponse: boolean = true;
  success = false;

  constructor(private router: Router, private gradelistservice: GradeListService,
              private UsersApiService: UsersApiService){}

  ngOnInit(): void{
    this.gradelistservice.getGradeList().subscribe(data => {this.gradelist = data;});
  }

  onSubmit() {
    this.hideResponse = false;
    this.UsersApiService.registerUser(this.form.value).subscribe(data => {
      this.response = data.response;
      this.success = data.success;
    });
  }
}