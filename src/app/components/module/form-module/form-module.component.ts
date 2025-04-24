import { CommonModule } from '@angular/common';
import { module, moduleCreate } from './../../../models/module/module.model';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-module',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.css']
})
export class FormModuleComponent implements OnInit {
  
  private formBuilder = inject(FormBuilder);
  
  @Input()
  modelo?: module;

  @Output()
  posteoFormulario = new EventEmitter<moduleCreate>();

  ngOnInit(): void {
    if(this.modelo !== undefined) {
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
  })

  public guardar() {
    if(this.form.valid) {
      const modules = this.form.value as moduleCreate;
      this.posteoFormulario.emit(modules);
    } else {
      this.form.markAllAsTouched();
    }
  }
}