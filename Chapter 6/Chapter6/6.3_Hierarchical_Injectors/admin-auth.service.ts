import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthService extends AuthService {
  getRole() { return 'admin'; }
}
