import { LayoutComponent } from './../shared/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => 
          import('./dashboard/dashboard.module').then ((m) => m.DashboardModule),
      },
      {
        path: 'e-voucher',
        loadChildren: () =>
          import('./e-voucher/e-voucher.module').then ((m) => m.EVoucherModule),
      },
      {
        path: 'farmers',
        loadChildren: () =>
          import('./farmers/farmers.module').then ((m) => m.FarmersModule),
      },
      {
        path: 'beneficiary',
        loadChildren: () =>
          import('./beneficiary/beneficiary.module').then ((m) => m.BeneficiaryModule),
      },
      {
        path: 'partners',
        loadChildren: () => 
          import('./partners/partners.module').then ((m) => m.PartnersModule),
      },
      {
        path: 'agents',
        loadChildren: () =>
          import('./distributing-agents/distributing-agents.module').then ((m) => m.DistributingAgentsModule),
      },
      {
        path: 'assets',
        loadChildren: () => 
          import('./asset-management/asset-management.module').then ((m) => m.AssetManagementModule),
      },
      {
        path: 'seasons',
        loadChildren: () => 
        import('./seasons/seasons.module').then ((m) => m.SeasonsModule),
      },
      {
        path: 'wallet',
        loadChildren: () => 
          import('./wallet-transactions/wallet-transactions.module').then ((m) => m.WalletTransactionsModule),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import('./ev-transactions/ev-transactions.module').then ((m) => m.EvTransactionsModule),
      },

// Users Management
      
      {
        path: 'users',
        loadChildren: () => 
          import('./user-management/user-management.module').then ((m) => m.UserManagementModule),
      },
      {
        path: 'profiles',
        loadChildren: () =>
          import('./profiles/profiles.module').then ((m) => m.ProfilesModule),
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllModulesRoutingModule { }
