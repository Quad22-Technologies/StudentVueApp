import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FamilyName} from '../models/testfullname'; // imported interface so we can use it
import { MyFamilyService } from '../services/my-family.service';
import { BackendConnectFamilyNameService } from '../services/backend-connect-family-name.service';


@Component({
  selector: 'app-testbranch',
  templateUrl: './testbranch.component.html',//ties to your html file
  styleUrls: ['./testbranch.component.scss']
})

export class TestbranchComponent {
  
  // FormGrop Tracks the value and validity state of a group of FormControl instances
  //When instantiating a FormGroup, pass in a collection of child controls as the first argument. The key for each child registers the name for the control.
  form = new FormGroup({
    namelist: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    backendnamelist: new FormControl('') //Form control for backend data list dropdown
  });
  
   //instantiate an empty object (family name). 
  fullname: FamilyName = {};
  familyNameList: FamilyName[] = [];
  backendfamilyNameList: FamilyName[] = []; //Array of objects to hold data from the backend service

//inside this contructor we are inializing the MyFamilyService class object so it can be used thoughout this component
//If you navigate to the MyFamilyService Class you will see the @Injectable- this decorator that marks a class as available to be provided and injected as a dependency.
//We are INJECTING MyFAMILYSERVICE Dependency into this component. 
  constructor(private familynameservice: MyFamilyService, private backendFamilyService: BackendConnectFamilyNameService){}

  //ngOnInit is a life cycle hook called by Angular to indicate that the Angular is DONE creating the component
  ngOnInit(): void {
   
    this.familyNameList = this.familynameservice.getFamilyNamesData();
    
    this.backendFamilyService.getFamilyNames().subscribe(data => {
                                              console.log("Backend Data List", data);
                                              this.backendfamilyNameList = data; });
  }

  //function that captures form values on the click event. Look into the html.
  showFormValues() // function call from the button click
  {
    this.fullname.firstname = this.form.controls.firstName.value;
    this.fullname.lastname = this.form.controls.lastName.value;

     console.log("Data from the object - ", this.fullname)
     console.log("Datafrom the controls - ", this.form.controls.firstName.value, this.form.controls.lastName.value);

   }
   
   //function that is called on the select dropdown change event in the html
   changeFamilyNameList(e:any) {
     console.log(e.target.value);
     console.log(e.target.value);
  }
}
