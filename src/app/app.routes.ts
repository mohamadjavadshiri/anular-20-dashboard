import { Routes } from '@angular/router';
import { ServiceUnavailableComponent } from './core/service-unavailable-page/service-unavailable/service-unavailable.component';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page/not-found-page.component';
import { MasterPage } from './master-page/view/master-page/master-page';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages-module').then((m) => m.PagesModule),
    component: MasterPage,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../app/pages/authorization/authorization-module').then(
        (m) => m.AuthorizationModule
      ),
  },
  { path: '503', component: ServiceUnavailableComponent },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];
