import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeletesRolUserComponent } from './get-deletes-rol-user.component';

describe('GetDeletesRolUserComponent', () => {
  let component: GetDeletesRolUserComponent;
  let fixture: ComponentFixture<GetDeletesRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeletesRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDeletesRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
