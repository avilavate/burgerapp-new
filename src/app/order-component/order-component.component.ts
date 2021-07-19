import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddIngredientServiceService } from '../add-ingredient-service.service';
import { OrderService } from '../order.service';
import { Ingredient } from './Ingredients';
import { ToastrService } from 'ngx-toastr';
import { Agent } from '../shared/agent.model';


@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
})
export class OrderComponentComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef | null = null;
  public Agents:Agent[]=[];
  constructor(private myIngredientService: AddIngredientServiceService, private myOrderService:OrderService,
    private toastr: ToastrService) {
    this.getAvailableIngredients();
   }

  ngOnInit(): void {
      this.Agents.push({id:0, Name:"ABC"},{id:1, Name:"XYZ"});
  }
  public availableIngredients:String[]=[];
  public selectedValue: String='Bun';
  public selectedAgent:Agent={id:-1, Name:'Invalid'};
  public StockIngredients:Ingredient[]|null= new Array<Ingredient>();
  Status:String="";

  getAvailableIngredients=()=>{
   this.availableIngredients= this.myIngredientService.getAvailableIngredients();
  
     for(let i =0;i<this.availableIngredients.length; i++){

     let stock= new Ingredient(this.availableIngredients[i], i);
     this.StockIngredients?.push(stock);
    
   }
  }
  public addIngredients(){
    this.myIngredientService.addIngredients(this.selectedValue);
    this.Status="Ingredient Added: "+ this.selectedValue;
    console.log(this.Status);

  }

  onChangeName($event:any){
    let selectIndex=$event.target.options.selectedIndex;
    this.selectedValue= this.availableIngredients[selectIndex];
    console.log(this.selectedValue);
  }

  onChangeAgent($event:any){
    let selectIndex=$event.target.options.selectedIndex;
    this.selectedAgent= this.Agents[selectIndex];
    console.log(this.selectedAgent);
  }

  getAllAddedIngredients():String[]{
   return this.myIngredientService.getAddedIngredients();
  }


  placeOrder=()=>{
    this.myOrderService.placeOrder(this.myIngredientService.getAddedIngredients(),this.selectedAgent, "Test For");
    this.toastr.success('Order Placed');
  }
}
