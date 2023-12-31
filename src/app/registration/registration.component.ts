import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { gradelist } from '../models/gradelist';
import { GradeListService } from '../services/gradelist.service';
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
    password: new FormControl(''),
    password2: new FormControl(''),
    gradelist: new FormControl('')
  });

  //instatiate the objects
  regObj: regObj = {};
  gradelist: gradelist[] = [];

constructor(private router:Router, private gradelistservice: GradeListService ){}

ngOnInit(): void{
  this.gradelist = this.gradelistservice.getGradeListData();
}

  onSubmit() {
    this.router.navigate(['']);
  }
}

//   this.familyNameList = this.familynameservice.getFamilyNamesData();
