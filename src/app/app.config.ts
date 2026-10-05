import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAppInitializer, inject } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({ prefix: './assets/i18n/', suffix: '.json' }),
      lang: 'en',
      fallbackLang: 'en',
    }),
    provideAppInitializer(() => {
      const translate = inject(TranslateService);
      const supported = ['en', 'es'];
      const browser = translate.getBrowserLang()?.split(/[-_]/)[0]?.toLowerCase();
      const initial = browser && supported.includes(browser) ? browser : 'en';
      return translate.use(initial);
    }),
  ],
};
