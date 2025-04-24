import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user, userCreate } from '../../../models/user/user.model';
import { UserService } from '../../../services/user/user.service';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-update-user',
  imports: [FormUserComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit{

  @Input({transform:numberAttribute})
  id!:number

  userService = inject(UserService);
  
  modelo?:user;
  route = inject(Router);



  ngOnInit(): void {
    this.userService.getId(this.id).subscribe(user=>{
      this.modelo = user;
    })
  }

  guardar(user:userCreate){
      this.userService.update(this.id,user).subscribe(()=>{
        this.route.navigate(['/register-user'])
      })
    }
}
