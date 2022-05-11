import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Leader } from './model/leader';
import { PartyLeaderService } from './service/party-leader-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  leaderInfo: Leader[] = [];
  isDataRetrieved: boolean = false;
  selected!: any;

  constructor(private leaderService: PartyLeaderService,
    private route: Router) {
    this.title = 'Angular App - Political Party';
  }

  getAllLeaderIds() {
    this.route.navigate(['/']);
    
    this.leaderService.findAll().subscribe(data => {
      this.leaderInfo = data;
      this.isDataRetrieved = true;
    });
  }

  update(e: any){
    this.selected = e;
    this.route.navigate(['getDetails']);
  }
}
