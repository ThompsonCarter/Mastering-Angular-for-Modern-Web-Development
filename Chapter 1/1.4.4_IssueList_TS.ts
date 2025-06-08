issues$: Observable<Issue[]>;

ngOnInit() {
  this.issues$ = this.issueService.getIssues();
}