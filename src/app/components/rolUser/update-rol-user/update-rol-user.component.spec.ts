import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRolUserComponent } from './update-rol-user.component';

describe('UpdateRolUserComponent', () => {
  let component: UpdateRolUserComponent;
  let fixture: ComponentFixture<UpdateRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
