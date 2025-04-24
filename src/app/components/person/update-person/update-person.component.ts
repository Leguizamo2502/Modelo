import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { person, personCreate } from '../../../models/person/person.model';
import { PersonService } from '../../../services/person/person.service';
import { FormPersonComponent } from '../form-person/form-person.component';

@Component({
  selector: 'app-update-person',
  imports: [FormPersonComponent],
  templateUrl: './update-person.component.html',
  styleUrl: './update-person.component.css'
})
export class UpdatePersonComponent implements OnInit{
  @Input({transform:numberAttribute})
  id!:number

  personService = inject(PersonService);
  
  modelo?:person;
  route = inject(Router);



  ngOnInit(): void {
    this.personService.getId(this.id).subscribe(person=>{
      this.modelo = person;
    })
  }

  guardar(person:personCreate){
      this.personService.update(this.id,person).subscribe(()=>{
        this.route.navigate(['/register-person'])
      })
    }
}
