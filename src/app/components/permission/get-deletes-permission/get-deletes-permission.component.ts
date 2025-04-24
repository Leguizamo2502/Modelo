import { Component, inject } from '@angular/core';
import { PermissionService } from '../../../services/permission/permission.service';
import { permission } from '../../../models/permission/permission.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-deletes-permission',
  imports: [MatTableModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './get-deletes-permission.component.html',
  styleUrl: './get-deletes-permission.component.css'
})
export class GetDeletesPermissionComponent {
  permissionService = inject(PermissionService);
  permission: permission[] = [];

  isAdmin: boolean = false;
  role = localStorage.getItem('role');

  constructor() {
    this.isAdmin = this.role === 'Admin';

    if (this.isAdmin) {
      this.displayedColumns.push('name', 'description', 'actions');
    }

    this.loadDeletesPermission();
  }

  loadDeletesPermission() {
    this.permissionService.getDeletesPermission().subscribe((data)=>{
      this.permission = data;
    })
  }

  displayedColumns: string[] = [];

  restaure(id: number, nul: []) {
    this.permissionService.restoreLogic(id, nul).subscribe(() => {
      console.log('Se restauro');
      this.loadDeletesPermission();
    });
  }
}
