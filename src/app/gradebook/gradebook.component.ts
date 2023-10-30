import { Component } from '@angular/core';
import { Gradebook } from '../models/gradebook';
import { GradeBookService } from '../services/gradebook.service';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.scss']
})
export class GradebookComponent {
gradebooklist:Gradebook[] =[];
constructor(private gradebookservice: GradeBookService){
  this.gradebooklist = gradebookservice.getGradeBookData();
}
}
