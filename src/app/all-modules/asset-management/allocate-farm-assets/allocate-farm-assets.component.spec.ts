import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateFarmAssetsComponent } from './allocate-farm-assets.component';

describe('AllocateFarmAssetsComponent', () => {
  let component: AllocateFarmAssetsComponent;
  let fixture: ComponentFixture<AllocateFarmAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocateFarmAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocateFarmAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
