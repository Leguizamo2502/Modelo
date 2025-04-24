import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { permission, permissionCreate } from '../../../models/permission/permission.model';
import { Router } from '@angular/router';
import { PermissionService } from '../../../services/permission/permission.service';
import { FormPermissionComponent } from '../form-permission/form-permission.component';

@Component({
  selector: 'app-update-permission',
  imports: [FormPermissionComponent],
  templateUrl: './update-permission.component.html',
  styleUrl: './update-permission.component.css'
})
export class UpdatePermissionComponent implements OnInit{
  @Input({transform:numberAttribute})
  id!:number

  permissionService = inject(PermissionService);
  
  modelo?:permission;
  route = inject(Router);



  ngOnInit(): void {
    this.permissionService.getId(this.id).subscribe(permission=>{
      this.modelo = permission;
    })
  }

  guardar(permission:permissionCreate){
      this.permissionService.update(this.id,permission).subscribe(()=>{
        this.route.navigate(['/register-permission'])
      })
    }
}
