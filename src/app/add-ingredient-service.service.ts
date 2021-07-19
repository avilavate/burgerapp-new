import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddIngredientServiceService {
    public ingredients :String[]=[];
    public availableIngredients=['Bun', 'Salad', 'Chees Slices', 'Cutlets'];
  constructor() { }

  addIngredients(ingredient:String){
    this.ingredients.push(ingredient);
  }
  getAvailableIngredients=()=>{
      return this.availableIngredients;
  }
  getAddedIngredients=()=>{
    return this.ingredients;
  }
}
