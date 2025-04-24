import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeletesFormModuleComponent } from './get-deletes-form-module.component';

describe('GetDeletesFormModuleComponent', () => {
  let component: GetDeletesFormModuleComponent;
  let fixture: ComponentFixture<GetDeletesFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeletesFormModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDeletesFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
