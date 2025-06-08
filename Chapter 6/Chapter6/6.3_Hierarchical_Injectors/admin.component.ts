import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { AdminAuthService } from './admin-auth.service';

@Component({
  selector: 'app-admin',
  providers: [{ provide: AuthService, useClass: AdminAuthService }],
  template: '<p>Role: {{ role }}</p>'
})
export class AdminComponent {
  role = this.auth.getRole();
  constructor(private auth: AuthService) {}
}
