import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { rolUser, rolUserCreate } from '../../../models/rolUser/rolUser.model';
import { RolUserService } from '../../../services/rolUser/rol-user.service';
import { FormRolUserComponent } from '../form-rol-user/form-rol-user.component';

@Component({
  selector: 'app-update-rol-user',
  imports: [FormRolUserComponent],
  templateUrl: './update-rol-user.component.html',
  styleUrl: './update-rol-user.component.css',
})
export class UpdateRolUserComponent implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;

  rolUserService = inject(RolUserService);

  modelo?: rolUser;
  route = inject(Router);

  ngOnInit(): void {
    this.rolUserService.getId(this.id).subscribe((rolUser) => {
      this.modelo = rolUser;
    });
  }

  guardar(rolUser: rolUserCreate) {
    this.rolUserService.update(this.id, rolUser).subscribe(() => {
      this.route.navigate(['/register-rolUser']);
    });
  }
}
