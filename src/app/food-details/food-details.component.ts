import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.css'
})
export class FoodDetailsComponent {

  foodId : string | null ='';

  constructor(private route: ActivatedRoute) {}

  ngOnit(): void {

    this.foodId = this.route.snapshot.paramMap.get('id');
  }
}
