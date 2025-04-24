import { module, moduleCreate } from './../../../models/module/module.model';
import { Component, inject } from '@angular/core';
import { ModuleServiceService } from '../../../services/module/module-service.service';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormModuleComponent } from '../form-module/form-module.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-module',
  imports: [MatTableModule,RouterLink,MatButtonModule,FormModuleComponent,CommonModule],
  templateUrl: './register-module.component.html',
  styleUrl: './register-module.component.css'
})
export class RegisterModuleComponent {
  moduleService = inject(ModuleServiceService);
  module:module[]=[];

  isAdmin:boolean = false;
  role = localStorage.getItem('role');



  constructor(){
    
    this.isAdmin = this.role === 'Admin';
    // if (this.isAdmin) {
    //   this.displayedColumns.push('adminAction')
    // }
    this.loadModule();
  }
  

  loadModule(){
    this.moduleService.getModule().subscribe((data)=>{
      this.module= data;
      console.log(data)
    })
  }

  displayedColumns: string[] = [
    'name',
    'description',
    'actions',
    
  ];

  

  private readonly router = inject(Router);

  guardar(modules:moduleCreate){
    this.moduleService.create(modules).subscribe(()=>{
      this.loadModule();
      this.router.navigate(['/register-module'])
    })
  }

  delete(id:number){
    this.moduleService.delete(id).subscribe(()=>{
      console.log("Se elimino correctamente")
      this.loadModule();
      
    })
  }

  deleteLogic(id:number,nul:[]){
    this.moduleService.deleteLogic(id,nul).subscribe(()=>{
      console.log("Se elimino Logicamnete")
      this.loadModule();
    })
  }

 

}
