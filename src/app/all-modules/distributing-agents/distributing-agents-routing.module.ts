import { RegisterAgentsComponent } from './register-agents/register-agents.component';
import { ManageAgentsComponent } from './manage-agents/manage-agents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'manage', component: ManageAgentsComponent},
  {path: 'register', component: RegisterAgentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributingAgentsRoutingModule { }
