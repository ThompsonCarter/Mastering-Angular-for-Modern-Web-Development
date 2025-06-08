@Injectable({ providedIn: 'root' })
export class OrderResolver implements Resolve<Order[]> {
  constructor(private dataService: DataService) {}
  resolve(): Observable<Order[]> {
    return this.dataService.fetchOrders();
  }
}