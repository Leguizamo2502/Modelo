import { Component, inject } from '@angular/core';
import { form } from '../../../models/form/form.model';
import { ModuleServiceService } from '../../../services/module/module-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FormServiceService } from '../../../services/form/form-service.service';

@Component({
  selector: 'app-get-deletes-form',
  imports: [MatTableModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './get-deletes-form.component.html',
  styleUrl: './get-deletes-form.component.css'
})
export class GetDeletesFormComponent {

  formService = inject(FormServiceService);
  form: form[] = [];

  isAdmin: boolean = false;
  role = localStorage.getItem('role');

  constructor() {
    this.isAdmin = this.role === 'Admin';

    if (this.isAdmin) {
      this.displayedColumns.push('name', 'description', 'actions');
    }

    this.loadDeletesForm();
  }

  loadDeletesForm() {
    this.formService.getDeletesForm().subscribe((data)=>{
      this.form = data;
    })
  }

  displayedColumns: string[] = [];

  restaure(id: number, nul: []) {
    this.formService.restoreLogic(id, nul).subscribe(() => {
      console.log('Se restauro');
      this.loadDeletesForm();
    });
  }
}
