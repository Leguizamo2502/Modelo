import { permission, permissionCreate } from './../../../models/permission/permission.model';
import { MatTableModule } from '@angular/material/table';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { PermissionService } from '../../../services/permission/permission.service';
import { FormPermissionComponent } from "../form-permission/form-permission.component";


@Component({
  selector: 'app-register-permission',
  imports: [MatTableModule, MatButtonModule, RouterLink, FormPermissionComponent],
  templateUrl: './register-permission.component.html',
  styleUrl: './register-permission.component.css'
})
export class RegisterPermissionComponent {
  permissionService = inject(PermissionService);
  permission:permission[]=[]

  constructor(){
    this.loadPermission();
  }

  loadPermission(){
    this.permissionService.getPermission().subscribe((data)=>{
      this.permission = data;
    })
  }

  displayedColumns: string[] = [
    'name',
    'description',
    'actions',
    
  ];

  private readonly router = inject(Router);

  guardar(permissions:permissionCreate){
    this.permissionService.create(permissions).subscribe(()=>{
      this.loadPermission();
      this.router.navigate(['/register-permission'])
    })
  }

  delete(id:number){
    this.permissionService.delete(id).subscribe(()=>{
      console.log("Se elimino correctamente")
      this.loadPermission();
      
    })
  }

  deleteLogic(id:number,nul:[]){
    this.permissionService.deleteLogic(id,nul).subscribe(()=>{
      console.log("Se elimino Logicamnete")
      this.loadPermission();
    })
  }
}
