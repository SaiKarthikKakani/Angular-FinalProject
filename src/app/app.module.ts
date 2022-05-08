import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PartyLeaderDevelopmentComponent } from './development-details/party-leader-development/party-leader-development.component'
import { PartyLeaderService } from './service/party-leader-service';
import { PartyLeaderDevelopmentService } from './service/party-leader-development.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PartyLeaderDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PartyLeaderService,
    PartyLeaderDevelopmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
