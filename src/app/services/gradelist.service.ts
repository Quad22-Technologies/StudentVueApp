import { Injectable } from '@angular/core';
import { gradelist } from '../models/gradelist';

@Injectable({ //ensures that the compiler will generate the necessary metadata to create the class's dependencies when the class is injected into another class 
  providedIn: 'root' //makes the injectable accesible through the entirety of the code
})
export class GradeListService {

  //the constructor initializes a newly created object (in this case it will instantiate each object in the list of data)
  constructor() { }
  getGradeListData() {
    //declaring a constant is essentially the same as declaring a variable -- declaring the gradelist array in this case
    const fdata: gradelist[] = [
      {
        id: 0,
        gradeNum: "K",
        gradeName: "Kindergarten",
      },
      {
        id: 1,
        gradeNum: "1",
        gradeName: "1st Grade",
      },
      {
        id: 2,
        gradeNum: "2",
        gradeName: "2nd Grade",
      },
      {
        id: 3,
        gradeNum: "3",
        gradeName: "3rd Grade",
      },
      {
        id: 4,
        gradeNum: "4",
        gradeName: "4th Grade",
      },
      {
        id: 5,
        gradeNum: "5",
        gradeName: "5th Grade",
      },
      {
        id: 6,
        gradeNum: "6",
        gradeName: "6th Grade",
      },
      {
        id: 7,
        gradeNum: "7",
        gradeName: "7th Grade",
      },
      {
        id: 8,
        gradeNum: "8",
        gradeName: "8th Grade",
      },
      {
        id: 9,
        gradeNum: "9",
        gradeName: "9th Grade",
      },
      {
        id: 10,
        gradeNum: "10",
        gradeName: "10th Grade",
      },
      {
        id: 11,
        gradeNum: "11",
        gradeName: "11th Grade",
      },
      {
        id: 12,
        gradeNum: "12",
        gradeName: "12th Grade",
      }
    ];

    return fdata; //returns the array of sample data
  }
}