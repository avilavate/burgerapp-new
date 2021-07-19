import { Injectable } from '@angular/core';

import { Ingredient } from './order-component/Ingredients';
import { Agent } from './shared/agent.model';
import {Order} from './shared/Order.model';
 
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public Orders:Order[]=[];

  placeOrder=(ingredients:String[], placedBy:Agent, pLacedFor:String):void=>{
    let id=this.getAllOrders().length+1;
   
    let order= new Order(id, ingredients,placedBy, pLacedFor);
    this.addToOrders(order);
  }

  private addToOrders=(order:Order):void=>{
    this.Orders?.push(order);
  }

  public getAllOrders=():Order[]=>{
    return this.Orders;
  }

  constructor() { }
}
