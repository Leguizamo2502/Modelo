import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { person, personCreate } from '../../../models/person/person.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-person',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatButtonModule, 
    RouterLink, 
    CommonModule
  ],
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.css'
})
export class FormPersonComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  @Input() modelo?: person;
  @Output() posteoFormulario = new EventEmitter<personCreate>();

  form = this.formBuilder.group({
    first_name: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ]],
    last_name: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    ]],
    phone_number: ['', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
      Validators.minLength(7),
      Validators.maxLength(15)
    ]],
    active: [true]
  });

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  get first_name() { return this.form.get('first_name'); }
  get last_name() { return this.form.get('last_name'); }
  get phone_number() { return this.form.get('phone_number'); }

  public guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    
    let persons = this.form.value as personCreate;
    this.posteoFormulario.emit(persons);
  }
}