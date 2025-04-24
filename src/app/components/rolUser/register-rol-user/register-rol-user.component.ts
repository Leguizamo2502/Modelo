import { Component, inject } from '@angular/core';
import { RolUserService } from '../../../services/rolUser/rol-user.service';
import { rolUser, rolUserCreate } from '../../../models/rolUser/rolUser.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormRolUserComponent } from '../form-rol-user/form-rol-user.component';

@Component({
  selector: 'app-register-rol-user',
  imports: [MatTableModule, MatButtonModule, RouterLink, FormRolUserComponent],
  templateUrl: './register-rol-user.component.html',
  styleUrl: './register-rol-user.component.css',
})
export class RegisterRolUserComponent {
  rolUserService = inject(RolUserService);
  rolUser: rolUser[] = [];

  constructor() {
    this.loadRolUser();
  }

  loadRolUser() {
    this.rolUserService.getRolUser().subscribe((data) => {
      this.rolUser = data;
    });
  }

  displayedColumns: string[] = ['username', 'rolname', 'actions'];

  private readonly router = inject(Router);
  
  guardar(rolUsers: rolUserCreate) {
    this.rolUserService.create(rolUsers).subscribe(() => {
      this.loadRolUser();
      this.router.navigate(['/register-rolUser']);
    });
  }

  delete(id: number) {
    this.rolUserService.delete(id).subscribe(() => {
      console.log('Se elimino correctamente');
      this.loadRolUser();
    });
  }

  deleteLogic(id: number, nul: []) {
    this.rolUserService.deleteLogic(id, nul).subscribe(() => {
      console.log('Se elimino Logicamnete');
      this.loadRolUser();
    });
  }
}
