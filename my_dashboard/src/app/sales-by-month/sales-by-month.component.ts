import { Component, OnInit } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.scss'
})
export class SalesByMonthComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Units Sold'
      }
    },
    series: [
      {
        name: "Iphone 15",
        type: "line",
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'Macbook Pro',
        type: 'line',
        color: '#7e0505',
        data: [
          47, 52, 44, 35, 78, 109, 82, 93, 101, 82, 99, 59
        ]
      },
      {
        name: 'Airpods 2nd gen',
        type: 'line',
        color: '#ed9e20',
        data: [
          157, 122, 134, 85, 18, 19, 22, 43, 11, 32, 69, 99
        ]
      },
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}