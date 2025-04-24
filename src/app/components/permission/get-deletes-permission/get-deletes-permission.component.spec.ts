import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeletesPermissionComponent } from './get-deletes-permission.component';

describe('GetDeletesPermissionComponent', () => {
  let component: GetDeletesPermissionComponent;
  let fixture: ComponentFixture<GetDeletesPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeletesPermissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDeletesPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
