import { Component, Inject } from '@angular/core';
import { API_URL } from './api.token';

@Component({
  selector: 'app-root',
  providers: [{ provide: API_URL, useValue: 'https://api.example.com' }],
  template: '<p>Check console for API URL</p>'
})
export class AppComponent {
  constructor(@Inject(API_URL) private apiUrl: string) {
    console.log(apiUrl);
  }
}
