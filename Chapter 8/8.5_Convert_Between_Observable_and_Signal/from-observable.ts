const data$ = this.http.get<Data[]>(url);
const dataSignal = signal<Data[]>([]);
data$.subscribe(list => dataSignal.set(list));