import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-footer-components',
  styleUrl: './footer-components.css',
  templateUrl: './footer-components.html',
})
export class FooterComponents {}
