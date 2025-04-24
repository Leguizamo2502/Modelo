import { Component, inject, OnInit } from '@angular/core';
import { form, formCreate } from '../../../models/form/form.model';
import { FormServiceService } from '../../../services/form/form-service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { FormFormComponent } from '../form-form/form-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [MatButtonModule,RouterLink,MatTableModule,FormFormComponent,CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit{
  formService = inject(FormServiceService);
  form:form[]=[];

  // constructor(){
    
  // }

  isAdmin: boolean = false;

  ngOnInit() {
    
    const role = localStorage.getItem('role');
    this.isAdmin = role === 'Admin';
    console.log('Rol:', role, '¿Es admin?', this.isAdmin);
    this.loadForm();
  }

  loadForm(){
    this.formService.getForm().subscribe((data)=>{
      this.form = data;
    })
  }

  displayedColumns: string[] = [
    'name',
    'description',
    'actions',
    
  ];

  private readonly router = inject(Router);

  guardar(forms:formCreate){
    this.formService.create(forms).subscribe(()=>{
      this.loadForm();
      this.router.navigate(['/register-form'])
      
    })
  }

  delete(id:number){
    this.formService.delete(id).subscribe(()=>{
      console.log("Se elimino correctamente")
      this.loadForm();
      
    })
  }

  deleteLogic(id:number,nul:[]){
    this.formService.deleteLogic(id,nul).subscribe(()=>{
      console.log("Se elimino Logicamnete")
      this.loadForm();
    })
  }

  restaure(id:number,m:[]){
    this.formService.restoreLogic(id,m).subscribe(()=>{
      console.log("REstaurado")
      this.loadForm();
    })
  }

}
