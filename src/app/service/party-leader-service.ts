import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leader } from '../model/leader';

@Injectable({
  providedIn: 'root'
})
export class PartyLeaderService {

  private allLeadersUrl: string;
  private leaderUrl: string;

  constructor(private http: HttpClient) {
    this.allLeadersUrl = 'http://localhost:8080/politics/api/v1/leader/getAllLeaders';
    this.leaderUrl = 'http://localhost:8080/politics/api/v1/leader/getLeaderById/';
  }

  public findAll(): Observable<Leader[]> {
    return this.http.get<Leader[]>(this.allLeadersUrl);
  }

  public findById(leaderId: number): Observable<Leader> {
    return this.http.get<Leader>(this.leaderUrl + leaderId);
  }

}
