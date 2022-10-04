import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributingAgentsRoutingModule } from './distributing-agents-routing.module';
import { RegisterAgentsComponent } from './register-agents/register-agents.component';
import { ManageAgentsComponent } from './manage-agents/manage-agents.component';
import { DataTablesModule } from 'angular-datatables';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [
    RegisterAgentsComponent,
    ManageAgentsComponent,
  ],
  imports: [
    CommonModule,
    DistributingAgentsRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    DataTablesModule,
  ]
})
export class DistributingAgentsModule { }
