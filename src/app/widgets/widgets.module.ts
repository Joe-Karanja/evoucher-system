import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { SparklineComponent } from './custom-charts/sparkline/sparkline.component';
import { TimelineFilterBarChartComponent } from './custom-charts/timeline-filter-bar-chart/timeline-filter-bar-chart.component';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './custom-charts/combo-chart';
import { BubbleChartInteractiveModule } from './custom-charts/bubble-chart-interactive';


@NgModule({
  declarations: [
    BarChartComponent,
    ComboChartComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    NgxChartsModule
  ]
})
export class WidgetsModule { }
