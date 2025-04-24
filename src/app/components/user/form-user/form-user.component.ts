import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { user, userCreate } from '../../../models/user/user.model';
import { PersonService } from '../../../services/person/person.service';
import { person } from '../../../models/person/person.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatButtonModule, 
    RouterLink, 
    CommonModule, 
    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  personService = inject(PersonService);
  person: person[] = [];

  @Input() modelo?: user;
  @Output() posteoFormulario = new EventEmitter<userCreate>();

  form = this.formBuilder.group({
    user_name: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-Z0-9_]+$/) // Solo letras, números y guiones bajos
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?=.{8,})/)
    ]],
    active: [true],
    person_id: [0, [
      Validators.required,
      Validators.min(1) 
      // Asegura que se seleccione una persona válida
    ]]
  });

  constructor() {
    this.personService.getPerson().subscribe((data) => {
      this.person = data;
    });
  }

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      // Si es edición, hacer el password opcional
      if (this.modelo.id) {
        this.form.controls.password.clearValidators();
        this.form.controls.password.updateValueAndValidity();
      }
    }
  }

  get user_name() { return this.form.get('user_name'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get person_id() { return this.form.get('person_id'); }

  public guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
    let users = this.form.value as userCreate;
    this.posteoFormulario.emit(users);

    
  }
}