import { WalletTransactionsComponent } from './wallet-transactions/wallet-transactions.component';
import { WalletAccountComponent } from './wallet-account/wallet-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'account', component: WalletAccountComponent},
  {path: 'transactions', component: WalletTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletTransactionsRoutingModule { }
