import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeletesUserComponent } from './get-deletes-user.component';

describe('GetDeletesUserComponent', () => {
  let component: GetDeletesUserComponent;
  let fixture: ComponentFixture<GetDeletesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeletesUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDeletesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
