import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallHouseholdsComponent } from './small-households.component';

describe('SmallHouseholdsComponent', () => {
  let component: SmallHouseholdsComponent;
  let fixture: ComponentFixture<SmallHouseholdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallHouseholdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallHouseholdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
