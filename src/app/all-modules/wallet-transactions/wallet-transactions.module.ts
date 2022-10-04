import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletTransactionsRoutingModule } from './wallet-transactions-routing.module';
import { WalletAccountComponent } from './wallet-account/wallet-account.component';
import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { DataTablesModule } from 'angular-datatables';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTreeModule } from 'ng-zorro-antd/tree';


@NgModule({
  declarations: [
    WalletAccountComponent,
    WalletTransactionsComponent
  ],
  imports: [
    CommonModule,
    WalletTransactionsRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    DataTablesModule,
    MatIconModule,
    NzTreeModule,
    NzMenuModule,
    MatMenuModule,
    NzDropDownModule,
    MatSelectModule,
    NzTabsModule,
    MatCardModule,
  ]
})
export class WalletTransactionsModule { }
