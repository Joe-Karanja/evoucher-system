import { StatisticsModule } from './../../statistics/statistics.module';
import { BarChartsComponent } from './../../statistics/bar-charts/bar-charts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';
// import { NgxChartsModule } from '@swimlane/ngx-charts';




@NgModule({
  declarations: [
    AdminDashboardComponent,
    // BarChartsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzGridModule,
    NzCardModule,
    NzMenuModule,
    MatMenuModule,
    MatIconModule,
    ChartsModule,
    StatisticsModule
  ]
})
export class DashboardModule { }
