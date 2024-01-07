import { Component, OnInit } from '@angular/core';
import { FamilyName } from '../models/familyname';
import { FamilyNameDataService } from '../services/familynamedataservice';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-familynames',
  templateUrl: './familynames.component.html',//ties to your html file
  styleUrls: ['./familynames.component.scss']
})

export class FamilynamesComponent  implements OnInit{

  familynames: FamilyName[] = [];
  
  constructor(private familyNameDataService: FamilyNameDataService){}

  ngOnInit(): void {
    this.loadFamilyNames();
}

  loadFamilyNames() {
    this.familyNameDataService.getDatabaseFamilyNames().subscribe({
      next: (response: FamilyName[]) => {
        this.familynames = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      },
      complete: () => {
        // Handle completion cases
      }
    });
  }

}

