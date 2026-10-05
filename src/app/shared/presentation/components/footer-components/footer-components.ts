import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';



@Component({
  imports: [TranslatePipe],
  selector: 'app-footer-components',
  styleUrl: './footer-components.css',
  templateUrl: './footer-components.html',
})
export class FooterComponents {}
