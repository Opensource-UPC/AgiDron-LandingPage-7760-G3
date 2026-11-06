import { Component } from '@angular/core';

import { NavbarContent } from '../../../shared/presentation/components/navbar-content/navbar-content';
import { Hero } from '../../landing/components/hero/hero';
import { Functionalities } from '../../landing/components/functionalities/functionalities';
import { Showcase } from '../../landing/components/showcase/showcase';
import { HowItWorks } from '../../landing/components/how-it-works/how-it-works';
import { TargetAudience } from '../../landing/components/target-audience/target-audience';
import { Video } from '../../landing/components/video/video';
import { Pricing } from '../../landing/components/pricing/pricing';
import { Faq } from '../../landing/components/faq/faq';
import { Contact } from '../../landing/components/contact/contact';
import { Team } from '../../landing/components/team/team';
import { FooterComponents } from '../../../shared/presentation/components/footer-components/footer-components';

@Component({
  imports: [
    NavbarContent,
    Hero,
    Functionalities,
    Showcase,
    HowItWorks,
    TargetAudience,
    Video,
    Pricing,
    Faq,
    Contact,
    Team,
    FooterComponents,
  ],
  selector: 'app-pages',
  styleUrl: './pages.css',
  templateUrl: './pages.html',
})
export class Pages {}
