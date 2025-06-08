import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from './api.token';

@Injectable({ providedIn: 'root' })
export class CachedDataService {
  private cache = new Map<string, any>();

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getOrFetch<T>(endpoint: string): Observable<T> {
    if (this.cache.has(endpoint)) {
      return of(this.cache.get(endpoint));
    }
    return this.http.get<T>(\`\${this.apiUrl}/\${endpoint}\`).pipe(
      tap(data => this.cache.set(endpoint, data))
    );
  }
}
