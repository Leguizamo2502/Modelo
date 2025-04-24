import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolServiceService } from '../../../services/rol/rol-service.service';
import { rol, rolCreate } from '../../../models/rol/rol.model';
import { FormRolComponent } from '../form-rol/form-rol.component';

@Component({
  selector: 'app-update-rol',
  imports: [FormRolComponent],
  templateUrl: './update-rol.component.html',
  styleUrl: './update-rol.component.css'
})
export class UpdateRolComponent implements OnInit{
 
  @Input()
  id!:number;

  rolService = inject(RolServiceService);
  modelo?:rol;
  route = inject(Router);


  ngOnInit(): void {
    this.rolService.getId(this.id).subscribe(rols=>{
      this.modelo = rols;
      console.log(this.modelo)
    })
  }

  guardar(rol:rolCreate){
    this.rolService.update(this.id,rol).subscribe(()=>{
      this.route.navigate(['/register-rol'])
    })
  }

}
