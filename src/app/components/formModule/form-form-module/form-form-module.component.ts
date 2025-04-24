import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { FormServiceService } from '../../../services/form/form-service.service';
import { ModuleServiceService } from '../../../services/module/module-service.service';
import { form } from '../../../models/form/form.model';
import { module } from '../../../models/module/module.model';
import { formModule, formModuleCreate } from '../../../models/formModule/formModule.model';

@Component({
  selector: 'app-form-form-module',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule
  ],
  templateUrl: './form-form-module.component.html',
  styleUrls: ['./form-form-module.component.css']
})
export class FormFormModuleComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  formService = inject(FormServiceService);
  forms: form[] = [];

  moduleService = inject(ModuleServiceService);
  module: module[] = [];

  constructor() {
    this.loadForms();
    this.loadModules();
  }

  @Input()
  modelo?: formModule;

  @Output()
  posteoFormulario = new EventEmitter<formModuleCreate>();

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue({
        moduleid: this.modelo.moduleid,
        formid: this.modelo.formid
      });
    }
  }

  form = this.formBuilder.group({
    moduleid: [0, [Validators.required, Validators.min(1)]],
    formid: [0, [Validators.required, Validators.min(1)]]
  });

  private loadForms() {
    this.formService.getForm().subscribe({
      next: (data) => this.forms = data,
      error: (err) => console.error('Error cargando formularios:', err)
    });
  }

  private loadModules() {
    this.moduleService.getModule().subscribe({
      next: (data) => this.module = data,
      error: (err) => console.error('Error cargando módulos:', err)
    });
  }

  public guardar() {
    if (this.form.valid) {
      const formModules = this.form.value as formModuleCreate;
      this.posteoFormulario.emit(formModules);
    } else {
      this.form.markAllAsTouched();
    }
  }
}