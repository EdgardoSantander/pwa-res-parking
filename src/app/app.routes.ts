import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./res-park/pages/login-page-rp/login-page-rp'),
  },
  {
    path: 'home',
    loadComponent: () => import('./res-park/pages/home-page-rp/home-page-rp').then(
      (c) => c.HomePageRp),
  },
  {
    path: 'settings',
    loadComponent: () => import('./res-park/pages/settings-page-rp/settings-page-rp'),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
