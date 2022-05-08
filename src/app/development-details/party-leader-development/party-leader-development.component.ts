import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Leader } from 'src/app/model/leader';
import { PartyLeaderDevelopment } from 'src/app/model/partyleaderdevelopment';
import { PartyLeaderDevelopmentService } from 'src/app/service/party-leader-development.service';
import { PartyLeaderService } from 'src/app/service/party-leader-service';

@Component({
  selector: 'app-party-leader-development',
  templateUrl: './party-leader-development.component.html',
  styleUrls: ['./party-leader-development.component.css']
})
export class PartyLeaderDevelopmentComponent implements OnInit, OnChanges {

  partyLeaderDevelopment: PartyLeaderDevelopment[] = [];
  partyLeader: Leader = new Leader;
  selected: any;

  constructor(private partyLeaderDevelopmentService: PartyLeaderDevelopmentService,
    private appComponent: AppComponent,
    private partyLeaderService: PartyLeaderService) { }

  ngOnInit(): void {
    this.selected = this.appComponent.selected;
    this.updateMethod();
  }

  ngOnChanges(): void {
    this.selected = this.appComponent.selected;
    this.updateMethod();
  }

  updateMethod() {
    console.log('The leader id selected is: ' + this.selected);
    this.partyLeaderService.findById(this.selected).subscribe(data => {
      this.partyLeader = data;
    });

    this.partyLeaderDevelopmentService.getLeaderDevelopmentDetails(this.selected).subscribe(data => {
      this.partyLeaderDevelopment = data;
    })
  }

}
