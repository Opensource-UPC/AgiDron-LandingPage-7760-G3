import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  imports: [MatFormFieldModule, MatSelectModule],
  selector: 'app-language-switcher',
  styleUrl: './language-switcher.css',
  templateUrl: './language-switcher.html',
})
export class LanguageSwitcher {
  currentLang = 'en';
  languages = ['en', 'es'];

  constructor(private translate: TranslateService) {
    const current = translate.getCurrentLang();
    if (current && this.languages.includes(current)) {
      this.currentLang = current;
    }
    translate.onLangChange.subscribe((event) => {
      if (event?.lang && this.languages.includes(event.lang)) {
        this.currentLang = event.lang;
      }
    });
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
