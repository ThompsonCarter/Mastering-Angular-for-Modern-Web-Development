status$ = this.machineService.status$; // Observable
status = signal<Status>('idle');
status$.subscribe(s => status.set(s));

temperature$ = fromSignal(signal(0)); // convert sensor signal back if needed