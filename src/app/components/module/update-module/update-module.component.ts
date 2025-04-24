import { Router } from '@angular/router';
import { ModuleServiceService } from '../../../services/module/module-service.service';
import { module, moduleCreate } from './../../../models/module/module.model';
import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormModuleComponent } from "../form-module/form-module.component";

@Component({
  selector: 'app-update-module',
  imports: [FormModuleComponent],
  templateUrl: './update-module.component.html',
  styleUrl: './update-module.component.css'
})
export class UpdateModuleComponent implements OnInit{
 
  @Input({transform:numberAttribute})
  id!:number

  moduleService = inject(ModuleServiceService);
  
  modelo?:module;
  route = inject(Router);



  ngOnInit(): void {
    this.moduleService.getId(this.id).subscribe(module=>{
      this.modelo = module;
    })
  }

  guardar(module:moduleCreate){
      this.moduleService.update(this.id,module).subscribe(()=>{
        this.route.navigate(['/register-module'])
      })
    }

}
