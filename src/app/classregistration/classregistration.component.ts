import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassName } from '../models/classnames';
import { ClassNamesApiService } from '../services/classnames.service';
import { UsersApiService } from '../services/users.service';
import { ClassGradesApiService } from '../services/classgrades.service';
import { Observable, concat, map, merge} from 'rxjs';

// TODO: Go out and get the real info from the currently logged in user.

// random student from our DB
const EXAMPLEUID = "0dd6110e-e791-42b5-943c-0cbb2fc2f67b";


@Component({
  selector: 'app-classregistration',
  templateUrl: './classregistration.component.html',
  styleUrls: ['./classregistration.component.scss']
})
export class ClassRegistrationComponent implements OnInit {
  ClassRegistrationForm = new FormGroup({
    selectedClass: new FormControl([])
  });

  classes: ClassName[] | null = null;
  existingClasses: ClassName[] = [];

  constructor(private router: Router, private ClassNamesApiService: ClassNamesApiService,
              private UsersApiService: UsersApiService, private ClassGradesApiService: ClassGradesApiService) {

    ClassNamesApiService.getRegisteredClasses(EXAMPLEUID).subscribe(
      classnames => {
        classnames.map(
          value => {
            UsersApiService.getUser(value.teacherId!).subscribe(
              teacher => {
                value.teacherName = teacher.firstName + " " + teacher.lastName;
          });
        });
        this.existingClasses = classnames;
    });

    ClassNamesApiService.getAvailableClasses(EXAMPLEUID).subscribe(
      classnames => {
        classnames.map(
          value => {
            UsersApiService.getUser(value.teacherId!).subscribe(
              teacher => {
                value.teacherName = teacher.firstName + " " + teacher.lastName;
          });
        });
        this.classes = classnames;
    });
  }

  ngOnInit(): void {}


  submit(id: any) {
    console.log(id);
  }

  // TODO: make this remove the class for the user.
  remove(id: any) {
    console.log(id);
  }
}
