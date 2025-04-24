import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeletesFormComponent } from './get-deletes-form.component';

describe('GetDeletesFormComponent', () => {
  let component: GetDeletesFormComponent;
  let fixture: ComponentFixture<GetDeletesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeletesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDeletesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
