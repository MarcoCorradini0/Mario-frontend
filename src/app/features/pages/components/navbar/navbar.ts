import { Component, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isVisible = true;
  lastScrollPosition = 0;

  @HostBinding('class.hidden') get isHidden() {
    return !this.isVisible;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollPosition < 10) {
      this.isVisible = true;
    } else if (currentScrollPosition > this.lastScrollPosition) {
      // Scroll down
      this.isVisible = false;
    } else {
      // Scroll up
      this.isVisible = true;
    }

    this.lastScrollPosition = currentScrollPosition;
  }
}
