import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDeletesRolComponent } from './get-deletes-rol.component';

describe('GetDeletesRolComponent', () => {
  let component: GetDeletesRolComponent;
  let fixture: ComponentFixture<GetDeletesRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDeletesRolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDeletesRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
