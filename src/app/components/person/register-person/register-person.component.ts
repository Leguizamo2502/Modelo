import { Component, inject } from '@angular/core';
import { person, personCreate } from '../../../models/person/person.model';
import { PersonService } from '../../../services/person/person.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { FormPersonComponent } from '../form-person/form-person.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-person',
  imports: [MatTableModule,MatButtonModule,RouterLink,FormPersonComponent,CommonModule],
  templateUrl: './register-person.component.html',
  styleUrl: './register-person.component.css'
})
export class RegisterPersonComponent {
  personService = inject(PersonService);
  person:person[]=[];

  isAdmin:boolean = false;
  role = localStorage.getItem('role');



  constructor(){
    
    this.isAdmin = this.role === 'Admin';
    // if (this.isAdmin) {
    //   this.displayedColumns.push('adminAction')
    // }
    this.loadPerson();
  }

  loadPerson(){
    this.personService.getPerson().subscribe((data)=>{
      this.person = data;
    })
  }

  displayedColumns: string[] = [
    'name',
    'description',
    'actions',
    
  ];

  private readonly router = inject(Router);

  guardar(persons:personCreate){
    this.personService.create(persons).subscribe(()=>{
      this.loadPerson();
      this.router.navigate(['/register-person'])
    })
  }

  delete(id:number){
    this.personService.delete(id).subscribe(()=>{
      console.log("Se elimino correctamente")
      this.loadPerson();
      
    })
  }

  deleteLogic(id:number,nul:[]){
    this.personService.deleteLogic(id,nul).subscribe(()=>{
      console.log("Se elimino Logicamnete")
      this.loadPerson();
    })
  }
}
