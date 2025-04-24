import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRolFormPermissionComponent } from './register-rol-form-permission.component';

describe('RegisterRolFormPermissionComponent', () => {
  let component: RegisterRolFormPermissionComponent;
  let fixture: ComponentFixture<RegisterRolFormPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRolFormPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRolFormPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
