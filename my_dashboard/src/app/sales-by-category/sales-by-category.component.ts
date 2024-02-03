import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';



@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']

})
export class SalesByCategoryComponent {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise sales'
    },
    xAxis: {
      categories: [
        'Iphones',
        'MacBooks',
        'Airpods',
        'Accessories',
        'Mac Studio',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Iphones',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Macbooks',
          y: 27.3,
          color: '#7e0505',
        },
        {
          name: 'Airpods',
          y: 17.5,
          color: '#ed9e20',
        },
        {
          name: 'Accessories',
          y: 13.2,
          color: '#6920fb',
        },
        {
          name: 'Mac Studio',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}