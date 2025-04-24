import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { rol, rolCreate } from '../../../models/rol/rol.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-rol',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './form-rol.component.html',
  styleUrls: ['./form-rol.component.css']
})
export class FormRolComponent implements OnInit {
  
  private readonly formBuilder = inject(FormBuilder);
  
  @Input()
  modelo?: rol;
  
  @Output()
  posteoFormulario = new EventEmitter<rolCreate>();

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  form = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]],
    description: ['', [
      Validators.maxLength(255)
    ]],
    active: [true]
  });

  public guardar() {
    if (this.form.valid) {
      let rols = this.form.value as rolCreate;
      this.posteoFormulario.emit(rols);
    } else {
      this.form.markAllAsTouched();
    }
  }
}