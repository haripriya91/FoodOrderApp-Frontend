import { Component, OnInit, inject } from '@angular/core';
import { RestaurantsListService } from '../services/restaurants/restaurants-list.service';
import { ThumbnailPipe } from '../pipes/thumbnail.pipe';
import { restaurants } from '../models/restaurants';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css'
})
export class RestaurantsComponent implements OnInit{

  public imgType ="square";
  public sliderType = "restaurantList";
  public restaurants : restaurants[]=[];
  private restaurantService = inject(RestaurantsListService);

  // Inject the ThumbnailPipe in the constructor
  constructor(private thumbnailPipe: ThumbnailPipe) {

  }

  ngOnInit(): void {
    this.getAllrestaurants();
  }

  getAllrestaurants(){
    this.restaurantService.getRestaurants().subscribe((restaurants: restaurants[]) => {
      // Use the pipe to transform the imageUrl
      this.restaurants = restaurants;
    });
   /* this.restaurants.forEach((restaurant: any) => {
      restaurant.imageUrl = this.thumbnailPipe.transform(restaurant.imageUrl);
    });*/
    return;
  }

  tagSlides =  [
    {img: 'assets/restaurants/tbn/rest1.jpg',name: 'Delicious Bites' },
    {img:    'assets/restaurants/tbn/rest2.jpg',name : 'Spice Palace'},
    {img: 'assets/restaurants/tbn/rest3.jpg',name : 'Sushi Heaven'},
    {img: 'assets/restaurants/tbn/rest4.jpg',name : 'Taco Fiesta'}
  ];
  
}
  