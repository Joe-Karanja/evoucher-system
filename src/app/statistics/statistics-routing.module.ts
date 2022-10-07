import { ChartComponent } from './chart/chart.component';
import { HighChartComponent } from './high-chart/high-chart.component';
import { HighChartsComponent } from './high-charts/high-charts.component';

import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartsComponent } from './line-charts/line-charts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartsComponent } from './bar-charts/bar-charts.component';

const routes: Routes = [
  {
    path: 'bar-charts',
    component: BarChartsComponent
  },
  {
    path: 'line-charts',
    component: LineChartsComponent
  },
  {
    path: 'doughnut-chart',
    component: DoughnutChartComponent
  },
  {
    path: 'radar-chart',
    component: RadarChartComponent
  },
  {
    path: 'pie-chart',
    component: PieChartComponent
  },
  {
    path: 'bubble-chart',
    component: BubbleChartComponent
  },
  {
    path: 'high-charts',
    component: HighChartsComponent
  },
  {
    path:'high-chart',
    component: HighChartComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
