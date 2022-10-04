import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFinanceComponent } from './micro-finance.component';

describe('MicroFinanceComponent', () => {
  let component: MicroFinanceComponent;
  let fixture: ComponentFixture<MicroFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
