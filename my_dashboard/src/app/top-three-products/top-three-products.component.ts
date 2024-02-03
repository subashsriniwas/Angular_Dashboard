import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { chart } from 'highcharts';


@Component({
  selector: 'app-top-three-products',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './top-three-products.component.html',
  styleUrl: './top-three-products.component.scss'
  
})

export class TopThreeProductsComponent {
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Products'
    },
    xAxis: {
      categories: [
        'Iphone 15',
        'MacBook Pro',
        'Airpods 2nd gen',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: false,
      data: [
        {
          name: 'Iphone 15',
          y: 395,
          color: '#044342',
        },
        {
          name: 'MacBook Pro',
          y: 305,
          color: '#7e0505',
        },
        {
          name: 'Airpods 2nd gen',
          y: 275,
          color: '#ed9e20',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
    
  })
}
