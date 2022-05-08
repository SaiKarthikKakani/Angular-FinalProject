import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartyLeaderDevelopment } from '../model/partyleaderdevelopment';

@Injectable({
  providedIn: 'root'
})
export class PartyLeaderDevelopmentService {

  usersUrl: string = "";

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/politics/api/v1/development/get-development-by-leader/';
  }

  getLeaderDevelopmentDetails(leaderId: number): Observable<PartyLeaderDevelopment[]>{
    return this.http.get<PartyLeaderDevelopment[]>(this.usersUrl + leaderId);
  }

}
