import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  imports: [TranslatePipe],
  selector: 'app-faq',
  styleUrl: './faq.css',
  templateUrl: './faq.html',
})
export class Faq {
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  readonly questions = signal<FaqItem[]>([]);
  readonly openIndex = signal(-1);

  constructor() {
    this.loadQuestions();
    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.loadQuestions());
  }

  toggle(index: number) {
    this.openIndex.update((current) => (current === index ? -1 : index));
  }

  private loadQuestions() {
    this.translate
      .get('faq.questions')
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((questions) => {
        this.questions.set(Array.isArray(questions) ? (questions as FaqItem[]) : []);
        this.openIndex.set(-1);
      });
  }
}
