import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  loading = true;
  public imgType ="round";
  public sliderType ="tagList";
  public h3Class!: string;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Simulating a delay to represent the content loading process
    setTimeout(() => {
      this.loading = false;
    }, 2000); // Adjust the delay as needed

    this.h3Class = this.route.snapshot.data['h3Class'];

  }

}
