import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeletesPersonComponent } from './get-deletes-person.component';

describe('GetDeletesPersonComponent', () => {
  let component: GetDeletesPersonComponent;
  let fixture: ComponentFixture<GetDeletesPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeletesPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDeletesPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
