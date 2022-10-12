import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should true for canActivate guard', () => {
    expect(guard.canActivate(new ActivatedRouteSnapshotMock(), {})).toEqual(true);
  });
});


export class ActivatedRouteSnapshotMock extends ActivatedRouteSnapshot {
  constructor() {
    super()
  }
}

export class RouterStateSnapshotMock extends RouterStateSnapshot {
  constructor(root: any) {
    super(root)
  }
}

