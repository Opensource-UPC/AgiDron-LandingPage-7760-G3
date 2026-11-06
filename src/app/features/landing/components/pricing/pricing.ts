import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-pricing',
  styleUrl: './pricing.css',
  templateUrl: './pricing.html',
})
export class Pricing {}
