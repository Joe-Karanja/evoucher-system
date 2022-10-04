import { ViewFarmerComponent } from './view-farmer/view-farmer.component';
import { ManageFarmersComponent } from './manage-farmers/manage-farmers.component';
import { RegisterFarmersComponent } from './register-farmers/register-farmers.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'register',component: RegisterFarmersComponent},
  {path: 'manage' , component: ManageFarmersComponent},
  {path: 'view/:id', component: ViewFarmerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersRoutingModule { }
