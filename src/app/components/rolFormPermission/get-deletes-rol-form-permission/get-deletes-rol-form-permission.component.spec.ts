import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeletesRolFormPermissionComponent } from './get-deletes-rol-form-permission.component';

describe('GetDeletesRolFormPermissionComponent', () => {
  let component: GetDeletesRolFormPermissionComponent;
  let fixture: ComponentFixture<GetDeletesRolFormPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeletesRolFormPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDeletesRolFormPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
