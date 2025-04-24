import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { person } from '../../../models/person/person.model';
import { PersonService } from '../../../services/person/person.service';

@Component({
  selector: 'app-get-deletes-person',
  imports: [MatTableModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './get-deletes-person.component.html',
  styleUrl: './get-deletes-person.component.css'
})
export class GetDeletesPersonComponent {

  personService = inject(PersonService);
  person: person[] = [];

  isAdmin: boolean = false;
  role = localStorage.getItem('role');

  constructor() {
    this.isAdmin = this.role === 'Admin';

    if (this.isAdmin) {
      this.displayedColumns.push('name', 'description', 'actions');
    }

    this.loadDeletesPerson();
  }

  loadDeletesPerson() {
    this.personService.getDeletesPerson().subscribe((data)=>{
      this.person = data;
    })
  }

  displayedColumns: string[] = [];

  restaure(id: number, nul: []) {
    this.personService.restoreLogic(id, nul).subscribe(() => {
      console.log('Se restauro');
      this.loadDeletesPerson();
    });
  }
}
