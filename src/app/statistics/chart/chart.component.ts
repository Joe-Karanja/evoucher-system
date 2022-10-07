import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import ChartModuleMore from 'highcharts/highcharts-more.js';
import HCSoldGauge from 'highcharts/modules/solid-gauge';
import  HighchartsMore from "highcharts/highcharts-more";
import  HighchartsExporting from "highcharts/modules/exporting";


ChartModuleMore(Highcharts);
HCSoldGauge(Highcharts);
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  title = "app";
  chart:any;
  updateFromInput: any = true;
  Highcharts = Highcharts;
  chartConstructor = "stockChart";
  chartCallback;
  chartOptions = {
    series: [
      {
        data: [
          [1539264600000, 214.45],
          [1539351000000, 222.11],
          [1539610200000, 217.36],
          [1539696600000, 222.15],
          [1539783000000, 221.19],
          [1539869400000, 216.02],
          [1539955800000, 219.31],
          [1540215000000, 220.65],
          [1540301400000, 222.73],
          [1540387800000, 215.09],
          [1540474200000, 219.8],
          [1540560600000, 216.3],
          [1540819800000, 212.24],
          [1540906200000, 213.3],
          [1540992600000, 218.86],
          [1541079000000, 222.22],
          [1541165400000, 207.48],
          [1541428200000, 201.59],
          [1541514600000, 203.77],
          [1541601000000, 209.95],
          [1541687400000, 208.49],
          [1541773800000, 204.47],
          [1542033000000, 194.17],
          [1542119400000, 192.23],
          [1542205800000, 186.8]
        ]
      }
    ],
    exporting: {
      enabled: true
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: "Data"
      }
    }
  };

  constructor() {
    const self = this;

    this.chartCallback = (chart: any) => {
      self.chart = chart;
    };
  }

  ngOnInit() {}

  setExtremes() {
    const self = this,
      chart = self.chart;

    chart.showLoading();
    setTimeout(() => {
      chart.hideLoading();

      chart.xAxis[0].setExtremes(1539955800000, 1541165400000);
      self.updateFromInput = true;
    }, 1000);
  }
}

