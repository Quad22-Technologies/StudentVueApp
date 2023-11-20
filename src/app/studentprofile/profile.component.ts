import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { StudentInfo } from '../models/studentinfo';
import { Router } from '@angular/router';
import { StudentInfoApiService } from '../services/studentinfo-api';

@Component({
    selector: 'user-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{
    student: StudentInfo = {};/*initializing a new object*/
    constructor(private studentInfoAPI: StudentInfoApiService) {
        const exampleStudentID = 15; // TODO: get the real student ID

        studentInfoAPI.getStudentInfo(exampleStudentID).subscribe((student: StudentInfo) => {this.student = student; console.log(student)});
    }
}