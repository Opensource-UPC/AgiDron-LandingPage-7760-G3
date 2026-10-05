import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pages } from './features/pages/landing-home/pages';
import {Functionalities} from './features/landing/components/functionalities/functionalities';

@Component({
  imports: [RouterOutlet, Pages, Functionalities],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('agridron-lp');
}
