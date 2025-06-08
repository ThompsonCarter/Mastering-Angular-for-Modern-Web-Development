import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './api.token';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  fetchOrders(): Observable<any[]> {
    return this.http.get<any[]>(\`\${this.apiUrl}/orders\`);
  }
}
