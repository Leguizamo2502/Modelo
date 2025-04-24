import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormModuleComponent } from './register-form-module.component';

describe('RegisterFormModuleComponent', () => {
  let component: RegisterFormModuleComponent;
  let fixture: ComponentFixture<RegisterFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
