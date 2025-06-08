import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  template: `<h2>Current Time: {{ time }}</h2>`,
})
export class ClockComponent implements OnInit {
  time = '';
  ngOnInit() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
}