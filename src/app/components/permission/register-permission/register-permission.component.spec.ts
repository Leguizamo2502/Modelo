import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPermissionComponent } from './register-permission.component';

describe('RegisterPermissionComponent', () => {
  let component: RegisterPermissionComponent;
  let fixture: ComponentFixture<RegisterPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
