import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, distinctUntilChanged, Observable } from 'rxjs';

interface Patient {
  name: string;
}

@Component({
  selector: 'app-live-search',
  standalone: true,
  templateUrl: './live-search.component.html'
})
export class LiveSearchComponent implements OnInit {
  searchControl = new FormControl('');
  results$!: Observable<Patient[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => this.http.get<Patient[]>(`/api/patients?q=${query}`))
    );
  }
}