import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() slides: any[] = [];
  @Input() imgType: string = '';
  @Input() sliderType: string = '';

  slideConfig = {
    slidesToShow: 4,        // Number of slides to show at a time
    slidesToScroll: 4,      // Number of slides to scroll on navigation
    dots: true,             // Display navigation dots
    infinite: true,         // Infinite loop
    autoplay: false,        // Autoplay slides
    autoplaySpeed: 3000,    // Autoplay speed in milliseconds
    arrows: true,           // Display navigation arrows
    responsive: [           // Responsive settings
      {
        breakpoint: 768,    // Breakpoint for smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,    // Breakpoint for even smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  };
}
