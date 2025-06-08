@Injectable({ providedIn: 'root' })
export class ProductService {
  products$ = this.http.get<Product[]>('/api/products');
  constructor(private http: HttpClient) {}
}