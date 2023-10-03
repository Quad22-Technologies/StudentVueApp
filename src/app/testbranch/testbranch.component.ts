import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-testbranch',
  templateUrl: './testbranch.component.html',//ties to your html file
  styleUrls: ['./testbranch.component.scss']
})
export class TestbranchComponent {
  fName:string = ""; //varible of string value that will be used to hold the firstname form value and is set to an empty string
  lName:string = ''; //varible of string value that will be used to hold the lastname form value  and is set to an empty string
  // FormGrop Tracks the value and validity state of a group of FormControl instances
  //When instantiating a FormGroup, pass in a collection of child controls as the first argument. The key for each child registers the name for the control.
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  
  //function that captures form values
  showFormValues()
  {
    // this.fName = this.form.controls.firstName.value;
     //this.lName = this.form.controls.lastName.value;
     console.log(this.form.controls.firstName.value, this.form.controls.lastName.value);
  }
}
