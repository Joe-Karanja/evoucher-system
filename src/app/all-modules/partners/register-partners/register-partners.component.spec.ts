import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPartnersComponent } from './register-partners.component';

describe('RegisterPartnersComponent', () => {
  let component: RegisterPartnersComponent;
  let fixture: ComponentFixture<RegisterPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
