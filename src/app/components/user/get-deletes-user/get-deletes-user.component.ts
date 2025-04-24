import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { user } from '../../../models/user/user.model';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-get-deletes-user',
  imports: [MatTableModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './get-deletes-user.component.html',
  styleUrl: './get-deletes-user.component.css'
})
export class GetDeletesUserComponent {
  userService = inject(UserService);
  user: user[] = [];

  isAdmin: boolean = false;
  role = localStorage.getItem('role');

  constructor() {
    this.isAdmin = this.role === 'Admin';

    if (this.isAdmin) {
      this.displayedColumns.push('username', 'email','name_person', 'actions');
    }

    this.loadDeletesUser();
  }

  loadDeletesUser() {
    this.userService.getDeletesUser().subscribe((data)=>{
      this.user = data;
    })
  }

  displayedColumns: string[] = [];

  restaure(id: number, nul: []) {
    this.userService.restoreLogic(id, nul).subscribe(() => {
      console.log('Se restauro');
      this.loadDeletesUser();
    });
  }
}
