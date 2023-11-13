import { Injectable } from "@angular/core";
import { Gradebook } from "../models/gradebook";





@Injectable({ //ensures that the compiler will generate the necessary metadata to create the class's dependencies when the class is injected into another class
  providedIn: 'root' //makes the injectable accesible through the entirety of the code
})
export class GradeBookService {

  //the constructor initializes a newly created object (in this case it will instantiate each object in the list of data)
  constructor() { }
  getGradeBookData() {
    //declaring a constant is essentially the same as declaring a variable -- declaring the gradelist array in this case
    const fdata: Gradebook[] = [
      {
        id: 0,
        class: "History",
        gradeLetter: "C",
        teacherName: "Mr.doe"

      },
      {
        id: 1,
        class: "Science",
        gradeLetter: "B",
        teacherName: "Mrs.allen"

      },
      {
        id: 2,
        class: "Math",
        gradeLetter: "A-",
        teacherName: "Mr.condo"

      },
      {
        id: 3,
        class: "Ap art",
        gradeLetter: "C",
        teacherName: "Ms.leonard"

      }

    ];

    return fdata; //returns the array of sample data
  }
}
