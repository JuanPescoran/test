import { TestBed } from '@angular/core/testing';

import { GymsApiService } from './gyms-api.service';

describe('GymsApiService', () => {
  let service: GymsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
