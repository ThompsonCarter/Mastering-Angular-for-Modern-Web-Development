import { hydrateApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

hydrateApplication({
  appModule: AppModule,
  rootSelector: 'app-root'
});