import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFarmersComponent } from './register-farmers.component';

describe('RegisterFarmersComponent', () => {
  let component: RegisterFarmersComponent;
  let fixture: ComponentFixture<RegisterFarmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFarmersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
