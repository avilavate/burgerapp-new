import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../shared/Order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
public Orders:Order[]=new Array<Order>();
  constructor(private myOrderService:OrderService) { }

  ngOnInit(): void {
    this.Orders=this.myOrderService.getAllOrders();
    console.log(this.Orders);
  }

}
