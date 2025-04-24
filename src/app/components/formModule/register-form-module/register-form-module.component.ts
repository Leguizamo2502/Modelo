import { Component, inject } from '@angular/core';
import { formModule, formModuleCreate } from '../../../models/formModule/formModule.model';
import { FormModuleService } from '../../../services/formModule/form-module.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { FormFormModuleComponent } from "../form-form-module/form-form-module.component";

@Component({
  selector: 'app-register-form-module',
  imports: [MatTableModule, MatButtonModule, RouterLink, FormFormModuleComponent],
  templateUrl: './register-form-module.component.html',
  styleUrl: './register-form-module.component.css',
})
export class RegisterFormModuleComponent {
  formModuleService = inject(FormModuleService);
  formModule: formModule[] = [];

  constructor() {
    this.loadformModule();
  }

  loadformModule() {
    this.formModuleService.getFormModule().subscribe((data) => {
      this.formModule = data;
    });
  }

  displayedColumns: string[] = ['formname', 'modulename', 'actions'];

  private readonly router = inject(Router);
  guardar(formModules: formModuleCreate) {
    this.formModuleService.create(formModules).subscribe(() => {
      this.loadformModule();
      this.router.navigate(['/register-formModule']);
    });
  }

  delete(id: number) {
    this.formModuleService.delete(id).subscribe(() => {
      console.log('Se elimino correctamente');
      this.loadformModule();
    });
  }

  deleteLogic(id: number, nul: []) {
    this.formModuleService.deleteLogic(id, nul).subscribe(() => {
      console.log('Se elimino Logicamnete');
      this.loadformModule();
    });
  }
}
