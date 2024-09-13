import { Component, Inject,HostListener} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodOrderAppFrontendFinal';


  hideMainHeader = false;
  showSubHeader = false;
  isLargeScreen = false;
  isBrowser = false;


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isLargeScreen = window.innerWidth >= 768;
    }
  }


  scrolldown() {
   if (this.isLargeScreen) {
      this.hideMainHeader = true;
      this.showSubHeader = true;
   }
  }

  scrollup() {
       // Do nothing on scroll up unless it's at the top
   }

  onReachedTop() {
    if (this.isLargeScreen) {
      this.hideMainHeader = false;
      this.showSubHeader = false;
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    if (this.isBrowser) {
      this.isLargeScreen = window.innerWidth >= 768;
      if (!this.isLargeScreen) {
        this.hideMainHeader = false;
        this.showSubHeader = false;
      }
    }
  }

}
