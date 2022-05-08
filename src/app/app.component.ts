import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  form = new FormGroup({
    selected: new FormControl('', Validators.required)
  });
  
  constructor(private leaderService: PartyLeaderService) {
    this.title = 'Angular App - Political Party';
  }

  getAllLeaderIds() {
    this.leaderService.findAll().subscribe(data => {
      this.leaderInfo = data;
      this.isDataRetrieved = true;
    });
  }

  update(e: any){
    this.selected = e.target.value;
    console.log('The leader id selected is: ' + this.selected);
  }
}
