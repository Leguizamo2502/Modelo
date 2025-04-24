import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { rolUser } from '../../../models/rolUser/rolUser.model';
import { RolUserService } from '../../../services/rolUser/rol-user.service';

@Component({
  selector: 'app-get-deletes-rol-user',
  imports: [MatTableModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './get-deletes-rol-user.component.html',
  styleUrl: './get-deletes-rol-user.component.css'
})
export class GetDeletesRolUserComponent {
  rolUserService = inject(RolUserService);
  rolUser: rolUser[] = [];

  isAdmin: boolean = false;
  role = localStorage.getItem('role');

  constructor() {
    this.isAdmin = this.role === 'Admin';

    if (this.isAdmin) {
      this.displayedColumns.push('username', 'rolname', 'actions');
    }

    this.loadDeletesRolUser();
  }

  loadDeletesRolUser() {
    this.rolUserService.getDeletesRolUser().subscribe((data)=>{
      this.rolUser = data;
    })
  }

  displayedColumns: string[] = [];

  restaure(id: number, nul: []) {
    this.rolUserService.restoreLogic(id, nul).subscribe(() => {
      console.log('Se restauro');
      this.loadDeletesRolUser();
    });
  }
}
