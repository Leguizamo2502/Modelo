import { Component, inject } from '@angular/core';
import { rolFormPermissionService } from '../../../services/rolFormPermission/rol-form-permission.service';
import { rolFormPermission, rolFormPermissionCreate } from '../../../models/rolFormPermission/rolFormPermission.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormRolFormPermissionComponent } from '../form-rol-form-permission/form-rol-form-permission.component';

@Component({
  selector: 'app-register-rol-form-permission',
  imports: [
    MatTableModule,
    MatButtonModule,
    RouterLink,
    FormRolFormPermissionComponent,
  ],
  templateUrl: './register-rol-form-permission.component.html',
  styleUrl: './register-rol-form-permission.component.css',
})
export class RegisterRolFormPermissionComponent {
  rolFormPermissionService = inject(rolFormPermissionService);
  rolFormPermission: rolFormPermission[] = [];

  private readonly router = inject(Router);

  constructor() {
    this.loadRolFormPermission();
  }

  loadRolFormPermission() {
    this.rolFormPermissionService.getRolFormPermission().subscribe((data) => {
      this.rolFormPermission = data;
    });
  }

  displayedColumns: string[] = [
    'rolname',
    'formname',
    'permissionname',
    'actions',
  ];


  guardar(rolformPermissions: rolFormPermissionCreate) {
    this.rolFormPermissionService.create(rolformPermissions).subscribe(() => {
      this.loadRolFormPermission();
      this.router.navigate(['/register-rolFormPermission']);
    });
  }

  delete(id: number) {
    this.rolFormPermissionService.delete(id).subscribe(() => {
      console.log('Se elimino correctamente');
      this.loadRolFormPermission();
    });
  }

  deleteLogic(id: number, nul: []) {
    this.rolFormPermissionService.deleteLogic(id, nul).subscribe(() => {
      console.log('Se elimino Logicamnete');
      this.loadRolFormPermission();
    });
  }
}
