import { TestBed } from '@angular/core/testing';

import { PartyLeaderDevelopmentService } from './party-leader-development.service';

describe('PartyLeaderDevelopmentService', () => {
  let service: PartyLeaderDevelopmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyLeaderDevelopmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
