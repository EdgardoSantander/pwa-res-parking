import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./res-park/pages/home-page-rp/home-page-rp').then(
      (c) => c.HomePageRp),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
