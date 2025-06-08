import { fromSignal } from '@angular/core/rxjs-interop';
const count$ = fromSignal(this.count);
count$.subscribe(n => console.log('Count is', n));