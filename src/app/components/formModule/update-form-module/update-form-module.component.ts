import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormFormModuleComponent } from '../form-form-module/form-form-module.component';
import { Router } from '@angular/router';
import { formModule, formModuleCreate } from '../../../models/formModule/formModule.model';
import { FormModuleService } from '../../../services/formModule/form-module.service';

@Component({
  selector: 'app-update-form-module',
  imports: [FormFormModuleComponent],
  templateUrl: './update-form-module.component.html',
  styleUrl: './update-form-module.component.css'
})
export class UpdateFormModuleComponent implements OnInit{
  @Input({transform:numberAttribute})
  id!:number

  formModuleService = inject(FormModuleService);
  
  modelo?:formModule;
  route = inject(Router);



  ngOnInit(): void {
    this.formModuleService.getId(this.id).subscribe(formModule=>{
      this.modelo = formModule;
    })
  }

  guardar(formModule:formModuleCreate){
      this.formModuleService.update(this.id,formModule).subscribe(()=>{
        this.route.navigate(['/register-formModule'])
      })
    }
}
