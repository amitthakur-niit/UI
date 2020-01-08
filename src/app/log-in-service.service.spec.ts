import { TestBed } from '@angular/core/testing';

import { LogInServiceService } from '../app/log-in-service.service';

describe('LogInServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogInServiceService = TestBed.get(LogInServiceService);
    expect(service).toBeTruthy();
  });
});
