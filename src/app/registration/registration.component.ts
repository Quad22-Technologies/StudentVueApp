import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MyFamilyService } from '../services/my-family.service';
import { FamilyName } from '../models/testfullname';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss' ]
})

@Injectable({
  providedIn: 'root',
})
export class RegistrationComponent {
  regUsers: any[] = [];
  familyName: FamilyName[] = [];
  
  //Move this in a model class and inject it into this component
  regObj: any = {
    firstName: "",
    lastName: "",
    address:"",
    city:"",
    state:"",
    zipCode:"",
    username: "",
    password:"",
    password2:""
  };

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
    userGrade: new FormControl('')
  });

constructor(private router:Router, 
  private familyService:MyFamilyService)
  {
    this.familyName = this.familyService.getFamilyNamesData()
  }


  onSubmit() {
    this.router.navigate(['']);
  }
}

//   this.familyNameList = this.familynameservice.getFamilyNamesData();