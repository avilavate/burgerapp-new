import { Component, OnInit } from '@angular/core';
import { AddIngredientServiceService } from '../add-ingredient-service.service';


@Component({
  selector: 'app-ingredient-component',
  templateUrl: './ingredient-component.component.html',
  styleUrls: ['./ingredient-component.component.css']
})
export class IngredientComponentComponent implements OnInit {

  public ingredients=['Bun', 'Salad', 'Chees Slices', 'Cutlets'];
  
  constructor(private myAddIngredientServiceService:AddIngredientServiceService) { }
  
  addIngredient=(addIngredient:String)=>{
    for (let i = 0; i < this.ingredients.length; i++) {
     if(addIngredient===this.ingredients[i]){
      this.myAddIngredientServiceService.addIngredients(addIngredient);
     }
    }
  }

  ngOnInit(): void {
  }

}
