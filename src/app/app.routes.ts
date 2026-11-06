import { Routes } from '@angular/router';
import { Pages } from './features/pages/landing-home/pages';
import { Terms } from './features/pages/terms/terms';

export const routes: Routes = [
  { path: '', component: Pages, title: 'AgriDron Solutions - Agricultura de Precisión con Drones' },
  { path: 'terminos', component: Terms, title: 'Términos y Condiciones | AgriDron Solutions' },
  { path: '**', redirectTo: '' },
];
