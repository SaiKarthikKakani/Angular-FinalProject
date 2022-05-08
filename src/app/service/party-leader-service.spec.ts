import { TestBed } from '@angular/core/testing';

import { PartyLeaderService } from './party-leader-service';

describe('PartyLeaderServiceService', () => {
  let service: PartyLeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyLeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
