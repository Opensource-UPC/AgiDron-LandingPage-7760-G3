import { Component, signal } from '@angular/core';
import { Pages } from './features/pages/landing-home/pages';

@Component({
  imports: [Pages],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('agridron-lp');
}
