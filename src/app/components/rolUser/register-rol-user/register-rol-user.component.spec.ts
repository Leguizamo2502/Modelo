import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRolUserComponent } from './register-rol-user.component';

describe('RegisterRolUserComponent', () => {
  let component: RegisterRolUserComponent;
  let fixture: ComponentFixture<RegisterRolUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRolUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
