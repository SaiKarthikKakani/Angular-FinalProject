import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyLeaderDevelopmentComponent } from './development-details/party-leader-development/party-leader-development.component';

const routes: Routes = [
  { path: 'getDetails', component: PartyLeaderDevelopmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
