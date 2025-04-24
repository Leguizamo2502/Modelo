import { Component, inject } from '@angular/core';
import { RolServiceService } from '../../../services/rol/rol-service.service';
import { rol, rolCreate } from '../../../models/rol/rol.model';

import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FormRolComponent } from '../form-rol/form-rol.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-rol',
  imports: [MatButtonModule,RouterLink,MatTableModule,FormRolComponent,CommonModule],
  templateUrl: './register-rol.component.html',
  styleUrl: './register-rol.component.css'
})
export class RegisterRolComponent {

  rolService = inject(RolServiceService);
  rol:rol[]=[]


  isAdmin:boolean = false;


  constructor(){
    const role = localStorage.getItem('role');
    console.log(role)
    this.isAdmin = role === 'Admin';
    this.loadRol();
  }

  private readonly router = inject(Router);

  loadRol(){
    this.rolService.getRol().subscribe((data)=>{
      this.rol = data;
    })
  }

  displayedColumns: string[] = [
    'name',
    'description',
    'actions',
    
  ];

  public guardar(rols:rolCreate){
    this.rolService.create(rols).subscribe(()=>{
      this.loadRol();
      this.router.navigate(['/register-rol']);
    })
    
  }

  delete(id:number){
    this.rolService.delete(id).subscribe(()=>{
      console.log("Se elimino correctamente")
      this.loadRol();
      
    })
  }

  deleteLogic(id:number,nul:[]){
    this.rolService.deleteLogic(id,nul).subscribe(()=>{
      console.log("Se elimino Logicamnete")
      this.loadRol();
    })
  }

}
