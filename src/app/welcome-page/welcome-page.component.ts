import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  loading = true;

  ngOnInit(): void {
    // Simulating a delay to represent the content loading process
    setTimeout(() => {
      this.loading = false;
    }, 2000); // Adjust the delay as needed
  }
}
