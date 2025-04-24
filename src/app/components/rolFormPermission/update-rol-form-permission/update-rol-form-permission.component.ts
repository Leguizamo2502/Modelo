import { Router } from '@angular/router';
import { rolFormPermissionService } from '../../../services/rolFormPermission/rol-form-permission.service';
import { rolFormPermission, rolFormPermissionCreate } from './../../../models/rolFormPermission/rolFormPermission.model';
import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormRolFormPermissionComponent } from '../form-rol-form-permission/form-rol-form-permission.component';

@Component({
  selector: 'app-update-rol-form-permission',
  imports: [FormRolFormPermissionComponent],
  templateUrl: './update-rol-form-permission.component.html',
  styleUrl: './update-rol-form-permission.component.css'
})
export class UpdateRolFormPermissionComponent implements OnInit{
  
   @Input({transform:numberAttribute})
    id!:number
  
    rolFormPermissionService = inject(rolFormPermissionService);
    
    modelo?:rolFormPermission;
    route = inject(Router);
  
  
  
    ngOnInit(): void {
      this.rolFormPermissionService.getId(this.id).subscribe(rolFormPermission=>{
        this.modelo = rolFormPermission;
      })
    }
  
    guardar(rolFormPermission:rolFormPermissionCreate){
        this.rolFormPermissionService.update(this.id,rolFormPermission).subscribe(()=>{
          this.route.navigate(['/register-rolFormPermission'])
        })
      }

}
