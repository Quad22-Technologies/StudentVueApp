import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  regUsers: any[] = [];
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

}
