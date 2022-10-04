
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { EVoucherRoutingModule } from './e-voucher-routing.module';
import { RedeemedComponent } from './redeemed/redeemed.component';
import { ActiveComponent } from './active/active.component';
import { GenerateComponent } from './generate/generate.component';
import { UnclaimedComponent } from './unclaimed/unclaimed.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RedeemedComponent,
    ActiveComponent,
    GenerateComponent,
    UnclaimedComponent,
  ],
  imports: [
    CommonModule,
    EVoucherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    DataTablesModule,
    NzModalModule,
  ]
})
export class EVoucherModule { }
