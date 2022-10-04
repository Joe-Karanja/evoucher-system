import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvTransactionsRoutingModule } from './ev-transactions-routing.module';
import { TopUpsComponent } from './top-ups/top-ups.component';
import { RedemptionComponent } from './redemption/redemption.component';


@NgModule({
  declarations: [
    TopUpsComponent,
    RedemptionComponent
  ],
  imports: [
    CommonModule,
    EvTransactionsRoutingModule
  ]
})
export class EvTransactionsModule { }
