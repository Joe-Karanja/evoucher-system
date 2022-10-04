import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { CaptureAssetsComponent } from './capture-assets/capture-assets.component';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { AllocateFarmAssetsComponent } from './allocate-farm-assets/allocate-farm-assets.component';
import { TrackAssetLocationComponent } from './track-asset-location/track-asset-location.component';
import { AssetRecoveryComponent } from './asset-recovery/asset-recovery.component';
import { AssetInventoryComponent } from './asset-inventory/asset-inventory.component';


@NgModule({
  declarations: [
    CaptureAssetsComponent,
    ManageAssetsComponent,
    AllocateFarmAssetsComponent,
    TrackAssetLocationComponent,
    AssetRecoveryComponent,
    AssetInventoryComponent,
  ],
  imports: [
    CommonModule,
    AssetManagementRoutingModule
  ]
})
export class AssetManagementModule { }
