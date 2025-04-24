import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { RouterLink } from '@angular/router';
import { form } from '../../../models/form/form.model';
import { permission } from '../../../models/permission/permission.model';
import { rol } from '../../../models/rol/rol.model';
import { rolFormPermission, rolFormPermissionCreate } from '../../../models/rolFormPermission/rolFormPermission.model';
import { FormServiceService } from '../../../services/form/form-service.service';
import { PermissionService } from '../../../services/permission/permission.service';
import { RolServiceService } from '../../../services/rol/rol-service.service';
import { rolFormPermissionService } from '../../../services/rolFormPermission/rol-form-permission.service';

@Component({
  selector: 'app-form-rol-form-permission',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './form-rol-form-permission.component.html',
  styleUrls: ['./form-rol-form-permission.component.css']
})
export class FormRolFormPermissionComponent implements OnInit {

  private readonly formBuilder = inject(FormBuilder);

  rolFormPermissionService = inject(rolFormPermissionService);
  rolFormPermissions: rolFormPermission[] = [];

  rolService = inject(RolServiceService);
  rols: rol[] = [];

  formService = inject(FormServiceService);
  forms: form[] = [];

  permissionService = inject(PermissionService);
  permissions: permission[] = [];

  @Input()
  modelo?: rolFormPermission;

  @Output()
  posteoFormulario = new EventEmitter<rolFormPermissionCreate>();

  constructor() {
    this.loadRoles();
    this.loadForms();
    this.loadPermissions();
  }

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue({
        rolid: this.modelo.rolid,
        formid: this.modelo.formid,
        permissionid: this.modelo.permissionid,
        active: this.modelo.active
      });
    }
  }

  form = this.formBuilder.group({
    rolid: [0, [Validators.required, Validators.min(1)]],
    formid: [0, [Validators.required, Validators.min(1)]],
    permissionid: [0, [Validators.required, Validators.min(1)]],
    active: [true]
  });

  private loadRoles() {
    this.rolService.getRol().subscribe({
      next: (data) => this.rols = data,
      error: (err) => console.error('Error cargando roles:', err)
    });
  }

  private loadForms() {
    this.formService.getForm().subscribe({
      next: (data) => this.forms = data,
      error: (err) => console.error('Error cargando formularios:', err)
    });
  }

  private loadPermissions() {
    this.permissionService.getPermission().subscribe({
      next: (data) => this.permissions = data,
      error: (err) => console.error('Error cargando permisos:', err)
    });
  }

  guardar() {
    if (this.form.valid) {
      const rfps = this.form.value as rolFormPermissionCreate;
      this.posteoFormulario.emit(rfps);
    } else {
      this.form.markAllAsTouched();
    }
  }
}