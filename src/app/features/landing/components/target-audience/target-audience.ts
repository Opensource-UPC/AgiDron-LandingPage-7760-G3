import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-target-audience',
  styleUrl: './target-audience.css',
  templateUrl: './target-audience.html',
})
export class TargetAudience {}
