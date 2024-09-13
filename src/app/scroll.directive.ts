import { Directive, EventEmitter, HostListener, Output,Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {


  @Output() scrollUp = new EventEmitter<void>();
  @Output() scrollDown   = new EventEmitter<void>();
  @Output() reachedTop = new EventEmitter<void>();

  lastScrollTop = 0;
  isLargeScreen = false;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.isLargeScreen = window.innerWidth >= 768;
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (!this.isBrowser || !this.isLargeScreen) {
      return;
    }

    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

   /* if (currentScrollTop > this.lastScrollTop) {
      this.scrollDown.emit();
    } else {
      this.scrollUp.emit();
    } 
    **/
    if (currentScrollTop === 0) {
      this.reachedTop.emit();
    } else if (currentScrollTop > this.lastScrollTop) {
      this.scrollDown.emit();
    } else {
      this.scrollUp.emit();
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  @HostListener('window:resize', [])
  onResize() {
    if (this.isBrowser) {
      this.isLargeScreen = window.innerWidth >= 768;
    }
  }

}
