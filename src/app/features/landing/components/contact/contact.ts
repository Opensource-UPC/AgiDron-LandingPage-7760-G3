import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [ReactiveFormsModule, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly translate = inject(TranslateService);

  readonly plans = [
    { value: 'info', label: 'contact.planInfo' },
    { value: 'essential', label: 'plans.essentialTitle' },
    { value: 'professional', label: 'plans.professionalTitle' },
    { value: 'enterprise', label: 'plans.enterpriseTitle' },
  ];

  readonly noteKey = signal('contact.formNote');

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    plan: ['info'],
    message: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, plan, message } = this.form.getRawValue();
    const planLabel = this.translate.instant(
      this.plans.find((item) => item.value === plan)?.label ?? 'contact.planInfo',
    );
    const subject = encodeURIComponent(`${this.translate.instant('contact.emailSubject')} - ${name}`);
    const body = encodeURIComponent(
      `${this.translate.instant('contact.emailName')}: ${name}\n` +
        `${this.translate.instant('contact.emailAddress')}: ${email}\n` +
        `${this.translate.instant('contact.emailPlan')}: ${planLabel}\n\n` +
        `${this.translate.instant('contact.emailMessage')}:\n${message}`,
    );

    this.noteKey.set('contact.sendingNote');
    window.location.href = `mailto:info@agridron.com?subject=${subject}&body=${body}`;
  }
}
