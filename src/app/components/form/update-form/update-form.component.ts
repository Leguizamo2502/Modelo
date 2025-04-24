import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { FormServiceService } from '../../../services/form/form-service.service';
import { form, formCreate } from '../../../models/form/form.model';
import { Router } from '@angular/router';
import { FormFormComponent } from '../form-form/form-form.component';

@Component({
  selector: 'app-update-form',
  imports: [FormFormComponent],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent implements OnInit{
  

  @Input({transform:numberAttribute})
  id!:number

  formService = inject(FormServiceService);

  modelo?:form;
  route = inject(Router);

  ngOnInit(): void {
    this.formService.getId(this.id).subscribe(form=>{
      this.modelo = form;
    })
  }

  guardar(form:formCreate){
    this.formService.update(this.id,form).subscribe(()=>{
      this.route.navigate(['/register-form'])
    })
  }

  



}
