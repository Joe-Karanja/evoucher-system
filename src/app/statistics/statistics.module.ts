import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    BarChartsComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    NgxChartsModule,
  ],
  exports: [
    BarChartsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class StatisticsModule { }
