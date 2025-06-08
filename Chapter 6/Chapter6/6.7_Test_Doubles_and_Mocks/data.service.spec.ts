import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { API_URL } from './api.token';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DataService,
        { provide: API_URL, useValue: 'http://test-api' }
      ]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch orders', () => {
    const mockOrders = [{ id: '1', amount: 100 }];
    service.fetchOrders().subscribe(orders => {
      expect(orders).toEqual(mockOrders);
    });
    const req = httpMock.expectOne('http://test-api/orders');
    req.flush(mockOrders);
    httpMock.verify();
  });
});
