import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../models/food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public foods : Food[]=[];
  private foodService = inject(FoodService);

  ngOnInit(): void {
    this.getAllFoodList();
  }

  getAllFoodList(){
    this.foodService.getFoodList().subscribe((foods: Food[]) => {
      // Use the pipe to transform the imageUrl
      this.foods = foods;
    });
    console.log(this.foods);
  }

}
