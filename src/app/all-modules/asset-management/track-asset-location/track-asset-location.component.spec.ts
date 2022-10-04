import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAssetLocationComponent } from './track-asset-location.component';

describe('TrackAssetLocationComponent', () => {
  let component: TrackAssetLocationComponent;
  let fixture: ComponentFixture<TrackAssetLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackAssetLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackAssetLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
