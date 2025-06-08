import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

const routes = [
  { path: '', loadChildren: () => import('./home/home.routes') },
  { path: 'shop', loadChildren: () => import('./shop/shop.routes') }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation())
  ]
});