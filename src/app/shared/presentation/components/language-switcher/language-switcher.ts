import { Component, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  styleUrl: './language-switcher.css',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher {
  readonly languages = ['es', 'en'];
  readonly currentLang = signal('es');

  constructor(private translate: TranslateService) {
    const current = translate.getCurrentLang();
    if (current && this.languages.includes(current)) {
      this.currentLang.set(current);
    }

    translate.onLangChange.subscribe((event) => {
      if (event?.lang && this.languages.includes(event.lang)) {
        this.currentLang.set(event.lang);
      }
    });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
