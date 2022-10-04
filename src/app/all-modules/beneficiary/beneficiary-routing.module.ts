import { ManageBeneficiaryComponent } from './manage-beneficiary/manage-beneficiary.component';
import { SmallHouseholdsComponent } from './small-households/small-households.component';
import { MicroFinanceComponent } from './micro-finance/micro-finance.component';
import { FarmerComponent } from './farmer/farmer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'register-farmer', component: FarmerComponent},
  {path: 'register-micro-finance',component:MicroFinanceComponent},
  {path: 'register-household', component: SmallHouseholdsComponent},
  {path: 'manage-beneficiaries', component: ManageBeneficiaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiaryRoutingModule { }
