import { TestBed } from '@angular/core/testing';

import { UsoCashbackService } from './uso-cashback.service';

describe('UsoCashbackService', () => {
  let service: UsoCashbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsoCashbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
