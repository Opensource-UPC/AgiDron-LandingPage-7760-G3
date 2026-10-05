import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-available',
  styleUrl: './available.css',
  templateUrl: './available.html',
})
export class Available {}
