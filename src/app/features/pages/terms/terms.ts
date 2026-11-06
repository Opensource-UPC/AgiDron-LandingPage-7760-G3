import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { FooterComponents } from '../../../shared/presentation/components/footer-components/footer-components';

interface TermsSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  alert?: string;
}

@Component({
  imports: [RouterLink, TranslatePipe, FooterComponents],
  selector: 'app-terms',
  styleUrl: './terms.css',
  templateUrl: './terms.html',
})
export class Terms {
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  readonly sections = signal<TermsSection[]>([]);

  constructor() {
    this.loadSections();
    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.loadSections());
  }

  private loadSections() {
    this.translate
      .get('terms.sections')
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((sections) =>
        this.sections.set(Array.isArray(sections) ? (sections as TermsSection[]) : []),
      );
  }
}
