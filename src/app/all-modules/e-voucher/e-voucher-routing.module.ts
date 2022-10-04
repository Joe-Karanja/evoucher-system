import { RedeemedComponent } from './redeemed/redeemed.component';
import { GenerateComponent } from './generate/generate.component';
import { ActiveComponent } from './active/active.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnclaimedComponent } from './unclaimed/unclaimed.component';

const routes: Routes = [
  
      { path: "generate", component: GenerateComponent },
      { path: "active", component: ActiveComponent },
      { path: "redeemed", component: RedeemedComponent },
      { path: "unclaimed", component: UnclaimedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EVoucherRoutingModule { }
