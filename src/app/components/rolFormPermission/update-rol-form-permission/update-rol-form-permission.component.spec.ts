import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRolFormPermissionComponent } from './update-rol-form-permission.component';

describe('UpdateRolFormPermissionComponent', () => {
  let component: UpdateRolFormPermissionComponent;
  let fixture: ComponentFixture<UpdateRolFormPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRolFormPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRolFormPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
