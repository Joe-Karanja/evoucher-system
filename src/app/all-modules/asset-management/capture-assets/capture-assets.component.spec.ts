import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureAssetsComponent } from './capture-assets.component';

describe('CaptureAssetsComponent', () => {
  let component: CaptureAssetsComponent;
  let fixture: ComponentFixture<CaptureAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
