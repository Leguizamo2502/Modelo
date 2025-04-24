import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FormModuleService } from '../../../services/formModule/form-module.service';
import { formModule } from '../../../models/formModule/formModule.model';

@Component({
  selector: 'app-get-deletes-form-module',
  imports: [MatTableModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './get-deletes-form-module.component.html',
  styleUrl: './get-deletes-form-module.component.css'
})
export class GetDeletesFormModuleComponent {
  formModuleService = inject(FormModuleService);
  formModule: formModule[] = [];

  isAdmin: boolean = false;
  role = localStorage.getItem('role');

  constructor() {
    this.isAdmin = this.role === 'Admin';

    if (this.isAdmin) {
      this.displayedColumns.push('formname', 'modulename', 'actions');
    }

    this.loadDeletesFormModule();
  }

  loadDeletesFormModule() {
    this.formModuleService.getDeletesFormModule().subscribe((data)=>{
      this.formModule = data;
    })
  }

  displayedColumns: string[] = [];

  restaure(id: number, nul: []) {
    this.formModuleService.restoreLogic(id, nul).subscribe(() => {
      console.log('Se restauro');
      this.loadDeletesFormModule();
    });
  }
}
