import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, LanguageSwitcher, TranslatePipe],
  selector: 'app-navbar-content',
  styleUrl: './navbar-content.css',
  templateUrl: './navbar-content.html',
})
export class NavbarContent {

}
