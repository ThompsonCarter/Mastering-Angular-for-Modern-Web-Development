import { enableZoneless } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

enableZoneless(); // turn off Zone.js

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});