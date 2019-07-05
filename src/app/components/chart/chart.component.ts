import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() coinData: Array<Number>;
  @Input() coinDataLabels: Array<Number>;
  
  chartData: Array<{ data: Array<Number> }>;

  chartOptions: Object = {
    responsive: true,
    maintainAspectRatio: false,
    elements: { 
      point: { radius: 0 } 
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: {
          display: false,
          drawBorder: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }]
    },
    legend: {
      display: false
    },
  }

  chartColor: Array<{ borderColor: String, backgroundColor: String }> = [
    { borderColor: 'blue', backgroundColor: '#006cff21' }
  ]

  constructor() {}

  ngOnInit() {
    this.chartData = [{
      data: this.coinData
    }]
  }
}
