import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyLeaderDevelopmentComponent } from './party-leader-development.component';

describe('PartyLeaderDevelopmentComponent', () => {
  let component: PartyLeaderDevelopmentComponent;
  let fixture: ComponentFixture<PartyLeaderDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyLeaderDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyLeaderDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
