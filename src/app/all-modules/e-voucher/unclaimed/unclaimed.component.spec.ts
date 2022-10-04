import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnclaimedComponent } from './unclaimed.component';

describe('UnclaimedComponent', () => {
  let component: UnclaimedComponent;
  let fixture: ComponentFixture<UnclaimedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnclaimedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnclaimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
