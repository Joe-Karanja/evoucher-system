import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () => 
      import('./auth/auth.module').then ((m) => m.AuthModule)
  },
  {
    path: 'layout',
    loadChildren: () => 
      import('./all-modules/all-modules.module').then ((m) => m.AllModulesModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./shared/shared.module').then ((m) => m.SharedModule)
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./statistics/statistics.module').then ((m) => m.StatisticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
