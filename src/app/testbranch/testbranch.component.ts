import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TestFullName } from '../models/testfullname'; // imported interface so we can use it

@Component({
  selector: 'app-testbranch',
  templateUrl: './testbranch.component.html',//ties to your html file
  styleUrls: ['./testbranch.component.scss']
})

export class TestbranchComponent {
  
  // FormGrop Tracks the value and validity state of a group of FormControl instances
  //When instantiating a FormGroup, pass in a collection of child controls as the first argument. The key for each child registers the name for the control.
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  
   //instantiate the object. We will move this to the constructor soon
  fullname: TestFullName = {
     firstname: "",
     lastname: ""
   };

  constructor(){}

  //function that captures form values
  showFormValues() // frunction call from the button click
  {
    this.fullname.firstname = this.form.controls.firstName.value;
    this.fullname.lastname = this.form.controls.lastName.value;

     console.log("Data from the object - ", this.fullname)
     console.log("Datafrom the controls - ", this.form.controls.firstName.value, this.form.controls.lastName.value);
  }
}
