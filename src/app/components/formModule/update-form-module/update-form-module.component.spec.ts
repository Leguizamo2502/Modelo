import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormModuleComponent } from './update-form-module.component';

describe('UpdateFormModuleComponent', () => {
  let component: UpdateFormModuleComponent;
  let fixture: ComponentFixture<UpdateFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
