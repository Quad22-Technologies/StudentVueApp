import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { gradelist } from '../models/gradelist';
import { GradeListService } from '../services/gradelist.service';
import { gradelistApi } from '../services/gradelist-api';
import { regObj } from '../models/registration';
import { registrationApiService } from '../services/registration-api';

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
    password: new FormControl(''),
    password2: new FormControl(''),
    gradelist: new FormControl(''),
    backendGradeList: new FormControl('')
  });

  //instatiate the objects
  regObj: regObj[] = [];
  gradelist: gradelist[] = [];
  backendGradelist: gradelist[] =[];

constructor(private router:Router, private gradelistservice: GradeListService, private gradelistApi:gradelistApi, private regApiService:registrationApiService){}

ngOnInit(): void{
  this.gradelist = this.gradelistservice.getGradeListData();

  this.gradelistApi.getGradeList().subscribe(data => {
    console.log("Backend Data List", data);
    this.backendGradelist = data; });

    this.regApiService.getRegInfo().subscribe(data => {
      console.log("Backend Data List", data);
      this.regObj = data; });
}

  onSubmit() {
    this.router.navigate(['']);
  }
}
