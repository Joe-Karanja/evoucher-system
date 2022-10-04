import { AssetInventoryComponent } from './asset-inventory/asset-inventory.component';
import { AllocateFarmAssetsComponent } from './allocate-farm-assets/allocate-farm-assets.component';
import { AssetRecoveryComponent } from './asset-recovery/asset-recovery.component';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { CaptureAssetsComponent } from './capture-assets/capture-assets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackAssetLocationComponent } from './track-asset-location/track-asset-location.component';

const routes: Routes = [
  {path: 'capture', component: CaptureAssetsComponent},
  {path: 'manage', component: ManageAssetsComponent},
  {path: 'track-location', component: TrackAssetLocationComponent},
  {path: 'recovery' , component: AssetRecoveryComponent},
  {path: 'allocate' ,component: AllocateFarmAssetsComponent},
  {path: 'invetory', component: AssetInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetManagementRoutingModule { }
