import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface ShowcaseTab {
  id: string; // identificador interno
  key: string; // sufijo de las claves en es.json / en.json
  image: string; // ruta de la captura
}

@Component({
  imports: [TranslatePipe],
  selector: 'app-showcase',
  styleUrl: './showcase.css',
  templateUrl: './showcase.html',
})
export class Showcase {
  readonly tabs: ShowcaseTab[] = [
    { id: 'dashboard', key: 'Dashboard', image: 'assets/images/showcase/app-dashboard.png' },
    { id: 'fincas', key: 'Fincas', image: 'assets/images/showcase/app-fincas.png' },
    { id: 'parcelas', key: 'Parcelas', image: 'assets/images/showcase/app-parcelas.png' },
    { id: 'cultivos', key: 'Cultivos', image: 'assets/images/showcase/app-cultivos.png' },
    { id: 'misiones', key: 'Misiones', image: 'assets/images/showcase/app-misiones.png' },
    {
      id: 'areasDeFumigacion',
      key: 'Areas',
      image: 'assets/images/showcase/app-areasFumigacion.png',
    },
    { id: 'reportes', key: 'Reportes', image: 'assets/images/showcase/app-reportes.png' },

    { id: 'drones', key: 'Drones', image: 'assets/images/showcase/app-drones.png' },
    {
      id: 'agroquimicos',
      key: 'Agroquimicos',
      image: 'assets/images/showcase/app-agroquimicos.png',
    },
    { id: 'perfil', key: 'Perfil', image: 'assets/images/showcase/app-perfil.png' },
  ];

  readonly activeTabId = signal<string>('dashboard');
  readonly activeTab = computed(
    () => this.tabs.find((t) => t.id === this.activeTabId()) ?? this.tabs[0],
  );

  selectTab(id: string) {
    this.activeTabId.set(id);
  }
}
