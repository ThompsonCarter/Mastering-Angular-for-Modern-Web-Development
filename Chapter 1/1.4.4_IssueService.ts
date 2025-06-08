@Injectable({ providedIn: 'root' })
export class IssueService {
  constructor(private http: HttpClient) {}
  getIssues() {
    return this.http.get<Issue[]>('/api/issues');
  }
}