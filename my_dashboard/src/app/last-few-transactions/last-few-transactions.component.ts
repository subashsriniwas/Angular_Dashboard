import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-last-few-transactions',
  standalone: true,
  imports: [ChartModule, NgClass, NgFor],
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.scss']
})
export class LastFewTransactionsComponent {

  transactions = [
    {
      id: 1,
      title: "Iphone 13",
      price: "₹60,000",
      shop: "East Hartford",
      location: "hartford@gmail.com",
      status: "Shipped",
      imgSrc: "https://img.icons8.com/plasticine/100/iphone-x.png"
    },
    {
      id: 2,
      title: "Mac Studio Pro",
      price: "₹2,25,000",
      shop: "Miamisburg",
      location: "miamisburg@gamil.com",
      status: "Shipped",
      imgSrc: "https://img.icons8.com/ios/50/mac-studio.png"
    },
    {
      id: 3,
      title: "Airpods lite",
      price: "₹8,000",
      shop: "Phoenix",
      location: "phoenix@gmail.com",
      status: "Confirmed",
      imgSrc: "https://img.icons8.com/ios/50/airpods-3.png"
    },
    {
      id: 4,
      title: "Battery Replacement",
      price: "₹3,000",
      shop: "Pallavi",
      location: "pallavi@gmail.com",
      status: "Pending",
      imgSrc: "https://img.icons8.com/ios/50/request-service.png" 
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}