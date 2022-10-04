import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRecoveryComponent } from './asset-recovery.component';

describe('AssetRecoveryComponent', () => {
  let component: AssetRecoveryComponent;
  let fixture: ComponentFixture<AssetRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetRecoveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
