import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss' ]
})
export class RegistrationComponent {
  regUsers: any[] = [];
  
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
    password2: new FormControl('')
  });

  constructor(private router:Router) {}

  onSubmit() {
    this.router.navigate(['/src/app/login']);
  }
}
