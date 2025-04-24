import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { user, userCreate } from '../../../models/user/user.model';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { FormUserComponent } from "../form-user/form-user.component";

@Component({
  selector: 'app-register-user',
  imports: [MatButtonModule, MatTableModule, RouterLink, FormUserComponent],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent {
  userService = inject(UserService);
  user: user[] = [];

  constructor() {
    this.loadUser();
  }

  loadUser(){
    this.userService.getUser().subscribe((data)=>{
      this.user = data;
    })
  }

  displayedColumns: string[] = [
    'username',
    'email',
    'name_person',
    'actions'

    
  ];


  private readonly router = inject(Router);

  guardar(users:userCreate){
    this.userService.create(users).subscribe(()=>{
      this.loadUser();
      this.router.navigate(['/register-user'])
    })
  }

  delete(id:number){
    this.userService.delete(id).subscribe(()=>{
      console.log("Se elimino correctamente")
      this.loadUser();
      
    })
  }

  deleteLogic(id:number,nul:[]){
    this.userService.deleteLogic(id,nul).subscribe(()=>{
      console.log("Se elimino Logicamnete")
      this.loadUser();
    })
  }

}
