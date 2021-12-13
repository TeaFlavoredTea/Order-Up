import { TestBed } from '@angular/core/testing';

import { CartLocalStorageService } from './cart-local-storage.service';

describe('CartLocalStorageService', () => {
  let service: CartLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
