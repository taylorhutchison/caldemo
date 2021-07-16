import { TestBed } from '@angular/core/testing';

import { DateMathService } from './datemath.service';

describe('DatemathService', () => {
  let service: DateMathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateMathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
