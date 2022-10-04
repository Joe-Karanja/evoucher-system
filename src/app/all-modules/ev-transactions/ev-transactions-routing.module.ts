import { RedemptionComponent } from './redemption/redemption.component';
import { TopUpsComponent } from './top-ups/top-ups.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'top-ups', component: TopUpsComponent},
  {path: 'redeem-evoucher', component: RedemptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvTransactionsRoutingModule { }
