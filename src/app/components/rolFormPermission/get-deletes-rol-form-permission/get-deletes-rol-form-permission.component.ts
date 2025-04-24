import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { rolFormPermission } from '../../../models/rolFormPermission/rolFormPermission.model';
import { rolFormPermissionService } from '../../../services/rolFormPermission/rol-form-permission.service';

@Component({
  selector: 'app-get-deletes-rol-form-permission',
  imports: [MatTableModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './get-deletes-rol-form-permission.component.html',
  styleUrl: './get-deletes-rol-form-permission.component.css'
})
export class GetDeletesRolFormPermissionComponent {
  rolFormPermissionService = inject(rolFormPermissionService);
  rolFormPermission: rolFormPermission[] = [];

  isAdmin: boolean = false;
  role = localStorage.getItem('role');

  constructor() {
    this.isAdmin = this.role === 'Admin';

    if (this.isAdmin) {
      this.displayedColumns.push('rolname', 'formname', 'permissionname', 'actions');
    }

    this.loadDeletesRolFormPermission();
  }

  loadDeletesRolFormPermission() {
    this.rolFormPermissionService.getDeletesRolFormPermission().subscribe((data)=>{
      this.rolFormPermission = data;
    })
  }

  displayedColumns: string[] = [];

  restaure(id: number, nul: []) {
    this.rolFormPermissionService.restoreLogic(id, nul).subscribe(() => {
      console.log('Se restauro');
      this.loadDeletesRolFormPermission();
    });
  }
}
