import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/navbar/navbar.component').then(
        (m) => m.NavbarComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'pokemon/:id',
        loadComponent: () =>
          import('./pages/detail-pokemon/detail-pokemon.component').then(
            (m) => m.DetailPokemonComponent
          ),
      },
    ]
  },
];
