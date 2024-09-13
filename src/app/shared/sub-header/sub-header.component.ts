import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.css'
})
export class SubHeaderComponent {

  @Input() isVisible : Boolean = false;

  searchTags = [
    'Fast Delivery',
    'Pure Veg',
    'Offers',
    'New on FoodOrder'
  ]

}
