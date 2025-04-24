import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRolComponent } from './register-rol.component';

describe('RegisterRolComponent', () => {
  let component: RegisterRolComponent;
  let fixture: ComponentFixture<RegisterRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterRolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
