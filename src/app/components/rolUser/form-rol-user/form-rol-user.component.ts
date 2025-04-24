import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { RolUserService } from '../../../services/rolUser/rol-user.service';
import { rolUser, rolUserCreate } from '../../../models/rolUser/rolUser.model';
import { rol } from '../../../models/rol/rol.model';
import { RolServiceService } from '../../../services/rol/rol-service.service';
import { UserService } from '../../../services/user/user.service';
import { user } from '../../../models/user/user.model';

@Component({
  selector: 'app-form-rol-user',
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
  templateUrl: './form-rol-user.component.html',
  styleUrls: ['./form-rol-user.component.css']
})
export class FormRolUserComponent implements OnInit {

  private formBuilder = inject(FormBuilder);

  rolService = inject(RolServiceService);
  rol: rol[] = [];

  userService = inject(UserService);
  user: user[] = [];

  constructor() {
    this.loadRoles();
    this.loadUsers();
  }

  @Input()
  modelo?: rolUser;

  @Output()
  posteoFormulario = new EventEmitter<rolUserCreate>();

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue({
        rolid: this.modelo.rolid,
        userid: this.modelo.userid
      });
    }
  }

  form = this.formBuilder.group({
    rolid: [0, [Validators.required, Validators.min(1)]],
    userid: [0, [Validators.required, Validators.min(1)]]
  })

  private loadRoles() {
    this.rolService.getRol().subscribe({
      next: (data) => this.rol = data,
      error: (err) => console.error('Error loading roles:', err)
    });
  }

  private loadUsers() {
    this.userService.getUser().subscribe({
      next: (data) => this.user = data,
      error: (err) => console.error('Error loading users:', err)
    });
  }

  public guardar() {
    if (this.form.valid) {
      const rolUsers = this.form.value as rolUserCreate;
      this.posteoFormulario.emit(rolUsers);
    } else {
      this.form.markAllAsTouched();
    }
  }
}