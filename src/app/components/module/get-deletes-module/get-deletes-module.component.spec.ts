import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeletesModuleComponent } from './get-deletes-module.component';

describe('GetDeletesModuleComponent', () => {
  let component: GetDeletesModuleComponent;
  let fixture: ComponentFixture<GetDeletesModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeletesModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDeletesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
