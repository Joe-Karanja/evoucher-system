import { Component, OnInit } from '@angular/core';
import { BaseType } from 'd3-selection';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Data = [
    { name: "January", value: 1500 },
    { name: "February", value: 550 },
    { name: "March", value: 150 },
    { name: "April", value: 1050 },
    { name: "May", value: 200 },
    { name: "June", value: 1500 },
    { name: "July", value: 590 },
    { name: "August", value: 150 },
    { name: "September", value: 1050},
    { name: "October", value: 200 },
    { name: "November", value: 1050 },
    { name: "December", value: 200 }
];

}
