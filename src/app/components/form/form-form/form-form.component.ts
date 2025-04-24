import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { form, formCreate } from '../../../models/form/form.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-form',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatButtonModule,
    RouterLink,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './form-form.component.html',
  styleUrls: ['./form-form.component.css']
})
export class FormFormComponent implements OnInit {
  
  private formBuilder = inject(FormBuilder);
  
  @Input()
  modelo?: form;

  @Output()
  posteoFormulario = new EventEmitter<formCreate>();



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
    if (this.form.valid) {
      const forms = this.form.value as formCreate;
      this.posteoFormulario.emit(forms);
    } else {
      this.form.markAllAsTouched();
    }
  }
}