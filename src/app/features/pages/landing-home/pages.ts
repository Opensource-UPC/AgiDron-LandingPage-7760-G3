import { Component } from '@angular/core';


import { NavbarContent } from '../../../shared/presentation/components/navbar-content/navbar-content';
import {Hero} from '../../landing/components/hero/hero';
import {Functionalities} from '../../landing/components/functionalities/functionalities';
import {HowItWorks} from '../../landing/components/how-it-works/how-it-works';
import {Available} from '../../landing/components/available/available';
import {TargetAudience} from '../../landing/components/target-audience/target-audience';
import {Team} from '../../landing/components/team/team';
import {FooterComponents} from '../../../shared/presentation/components/footer-components/footer-components';

@Component({
  imports: [NavbarContent, Hero, Functionalities, HowItWorks, Available, TargetAudience, Team, FooterComponents],
  selector: 'app-pages',
  styleUrl: './pages.css',
  templateUrl: './pages.html',
})
export class Pages {}
