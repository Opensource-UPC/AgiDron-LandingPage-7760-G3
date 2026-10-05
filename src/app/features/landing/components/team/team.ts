import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  imports: [TranslatePipe],
  selector: 'app-team',
  styleUrl: './team.css',
  templateUrl: './team.html',
})
export class Team {}
