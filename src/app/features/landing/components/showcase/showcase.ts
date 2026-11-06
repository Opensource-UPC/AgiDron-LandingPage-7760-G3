import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

type ShowcaseTab = 'dashboard' | 'fincas' | 'misiones';

@Component({
  imports: [TranslatePipe],
  selector: 'app-showcase',
  styleUrl: './showcase.css',
  templateUrl: './showcase.html',
})
export class Showcase {
  readonly activeTab = signal<ShowcaseTab>('dashboard');

  selectTab(tab: ShowcaseTab) {
    this.activeTab.set(tab);
  }
}
