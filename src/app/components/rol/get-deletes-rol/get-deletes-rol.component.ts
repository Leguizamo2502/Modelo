import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { rol } from '../../../models/rol/rol.model';
import { RolServiceService } from '../../../services/rol/rol-service.service';

@Component({
  selector: 'app-get-deletes-rol',
  imports: [MatTableModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './get-deletes-rol.component.html',
  styleUrl: './get-deletes-rol.component.css'
})
export class GetDeletesRolComponent {
  rolService = inject(RolServiceService);
  rol: rol[] = [];

  isAdmin: boolean = false;
  role = localStorage.getItem('role');

  constructor() {
    this.isAdmin = this.role === 'Admin';

    if (this.isAdmin) {
      this.displayedColumns.push('name', 'description', 'actions');
    }

    this.loadDeletesRol();
  }

  loadDeletesRol() {
    this.rolService.getDeletesRol().subscribe((data)=>{
      this.rol = data;
    })
  }

  displayedColumns: string[] = [];

  restaure(id: number, nul: []) {
    this.rolService.restoreLogic(id, nul).subscribe(() => {
      console.log('Se restauro');
      this.loadDeletesRol();
    });
  }
}
