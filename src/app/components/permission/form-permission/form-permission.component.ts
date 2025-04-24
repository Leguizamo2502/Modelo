import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { permission, permissionCreate } from '../../../models/permission/permission.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-permission',
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
  templateUrl: './form-permission.component.html',
  styleUrls: ['./form-permission.component.css'],
})
export class FormPermissionComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  
  @Input()
  modelo?: permission;

  @Output()
  posteoFormulario = new EventEmitter<permissionCreate>();

  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  form = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern(/^[a-z_]+$/)
    ]],
    description: ['', [
      Validators.required,
      Validators.maxLength(255)
    ]],
    active: [true]
  })

  public guardar(){
    if(this.form.valid) {
      const permissions = this.form.value as permissionCreate;
      this.posteoFormulario.emit(permissions);
    } else {
      this.form.markAllAsTouched();
    }
  }
}