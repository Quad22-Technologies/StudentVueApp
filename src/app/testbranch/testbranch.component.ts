import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FamilyName} from '../models/familyname'; // imported interface so we can use it
import { FamilyNameDataService } from '../services/familynamedataservice';


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
    familynamelist: new FormControl('')
  });
  
   //instantiate an empty object (family name). 
  familyname: FamilyName = {};
  databasebackendfamilyNameList: FamilyName[] = [];

//inside this contructor we are inializing the MyFamilyService class object so it can be used thoughout this component
//If you navigate to the MyFamilyService Class you will see the @Injectable- this decorator that marks a class as available to be provided and injected as a dependency.
//We are INJECTING MyFAMILYSERVICE Dependency into this component. 
  constructor(private familyNameDataService: FamilyNameDataService){}

  //ngOnInit is a life cycle hook called by Angular to indicate that the Angular is DONE creating the component
  ngOnInit(): void {
    this.loadFamilyNames();
 
  }

   loadFamilyNames() {
    this.familyNameDataService.getDatabaseFamilyNames().subscribe(
      data => this.databasebackendfamilyNameList = data,
      error => console.error('Error loading family names:', error)
    );
  }
   
  createFamilyName() {

    // Check if the form is valid before proceeding ** Added Validation
    if (this.form.valid) {
      // Assuming this.form is an instance of FormGroup
      this.familyname.firstname = this.form.controls.firstName.value;
      this.familyname.lastname = this.form.controls.lastName.value;
  
      this.familyNameDataService.createFamilyName(this.familyname).subscribe(
        createdFamilyName => {
          console.log('Family name created successfully:', createdFamilyName);
          this.loadFamilyNames(); // Reload the list after creating a new family name
          this.form.reset(); // Reset the form controls
        },
        error => {
          console.error('Error creating family name:', error);
          // Provide user feedback, e.g., display an error message
        }
      );
    } else {
      // Form is not valid, provide user feedback or handle accordingly
    }
  }
  
   //function that is called on the select dropdown change event in the html
   changeFamilyNameList(e: any) {
    console.log(e.target.value);
  }
  
  //function that is called on the select dropdown change event in the html
  selectedFamilyName(e: any) {
    console.log(e);
    
  }

  deleteFamilyName(e: any) {
    console.log(e);
    this.familyNameDataService.deleteFamilyName(e.id).subscribe(
      () => {
        this.loadFamilyNames(); // Reload the list after deleting a family name
        this.form.reset(); // Reset the form controls
      }
    );
  }

}
