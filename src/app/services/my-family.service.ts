import { Injectable } from '@angular/core';
import { FamilyName } from '../models/testfullname';

@Injectable({ //ensures that the compiler will generate the necessary metadata to create the class's dependencies when the class is injected into another class 
  providedIn: 'root' //Determines which injectors will provide the injectable in this case it is the root
})
export class MyFamilyService {

  //A constructor is a special method of a class or structure in object-oriented programming that initializes a newly created object
  constructor() { }

  //function that return an array of family name objects
  getFamilyNamesData() {
    //const decloration of family name
    const fdata: FamilyName[] = [{
        id:1,
        firstname: "Judy",
        lastname: "Johnson"
    }, 
    {
        id:2,
        firstname: "Robert",
        lastname: "Young"
    }, 
    {
        id:3,
        firstname: "Sara",
        lastname: "West"
    },
    {
        id:4,
        firstname: "Derrick",
        lastname: "Zantt"
    }, 
    {
        id:5,
        firstname: "Kincade",
        lastname: "Burroughs"
    }, 
    {
        id:6,
        firstname: "Mohammed",
        lastname: "Kings"
    }, 
    {
        id:7,
        firstname: "Kenneth",
        lastname: "Smith"
    }];

   return fdata; //returns the array of sample data
  }
}
