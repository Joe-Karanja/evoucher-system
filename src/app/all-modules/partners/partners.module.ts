import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { RegisterPartnersComponent } from './register-partners/register-partners.component';
import { ManagePartnersComponent } from './manage-partners/manage-partners.component';
import { DataTablesModule } from 'angular-datatables';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [
    RegisterPartnersComponent,
    ManagePartnersComponent
  ],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    DataTablesModule,
  ]
})
export class PartnersModule { }
