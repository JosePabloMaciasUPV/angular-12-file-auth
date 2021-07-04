import { TestBed } from '@angular/core/testing';

import { StopAuthGuard } from './stop-auth.guard';

describe('StopAuthGuard', () => {
  let guard: StopAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StopAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
