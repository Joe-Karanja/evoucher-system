import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
// import { HighchartsChartModule } from 'highcharts-angular';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { HighChartsComponent } from './high-charts/high-charts.component';
import { ChartModule } from 'angular-highcharts';
import { HighChartComponent } from './high-chart/high-chart.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    BarChartsComponent,
    LineChartsComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    BubbleChartComponent,
    HighChartsComponent,
    HighChartComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    ChartsModule,
    ChartModule
  ],
  exports: [
    BarChartsComponent,
    ChartsModule,
    HighChartsComponent,
    BarChartsComponent,
    BubbleChartComponent,
    PieChartComponent,
    LineChartsComponent,
    RadarChartComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class StatisticsModule { }
