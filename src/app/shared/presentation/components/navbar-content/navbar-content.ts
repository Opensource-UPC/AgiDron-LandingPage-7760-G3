import { Component, HostListener, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  imports: [LanguageSwitcher, TranslatePipe],
  selector: 'app-navbar-content',
  styleUrl: './navbar-content.css',
  templateUrl: './navbar-content.html',
})
export class NavbarContent {
  readonly navOpen = signal(false);

  toggleMenu() {
    this.navOpen.update((open) => !open);
  }

  closeMenu() {
    this.navOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 1100) {
      this.closeMenu();
    }
  }
}
