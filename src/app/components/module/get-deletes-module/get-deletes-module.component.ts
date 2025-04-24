import { module } from './../../../models/module/module.model';
import { Component, inject } from '@angular/core';
import { ModuleServiceService } from '../../../services/module/module-service.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-deletes-module',
  imports: [MatTableModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './get-deletes-module.component.html',
  styleUrl: './get-deletes-module.component.css',
})
export class GetDeletesModuleComponent {
  moduleService = inject(ModuleServiceService);
  module: module[] = [];

  isAdmin: boolean = false;
  role = localStorage.getItem('role');

  constructor() {
    this.isAdmin = this.role === 'Admin';

    if (this.isAdmin) {
      this.displayedColumns.push('name', 'description', 'actions');
    }

    this.loadDeletesModule();
  }

  loadDeletesModule() {
    this.moduleService.getDeletesModule().subscribe((data) => {
      this.module = data;
    });
  }

  displayedColumns: string[] = [];

  restaure(id: number, nul: []) {
    this.moduleService.restoreLogic(id, nul).subscribe(() => {
      console.log('Se restauro');
      this.loadDeletesModule();
    });
  }
}
