import { Ingredient } from "../order-component/Ingredients";
import { Agent } from "./agent.model";

export class Order{
   constructor(
      public OrderId:Number,
    public Ingredients:String[],
   public PlacedBy:Agent,
    public PLacedFor:String
   ){}
}