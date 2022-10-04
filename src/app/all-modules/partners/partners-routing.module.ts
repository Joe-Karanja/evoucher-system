import { RegisterPartnersComponent } from './register-partners/register-partners.component';
import { ManagePartnersComponent } from './manage-partners/manage-partners.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'manage', component: ManagePartnersComponent},
  {path: 'register', component: RegisterPartnersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersRoutingModule { }
