import { Injectable } from '@angular/core';
import { Match } from '../models/match';
import { Observable, of } from 'rxjs';
import { Team } from '../models/team';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { MatchBet } from '../models/matchbet';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {

  constructor(private httpClient: HttpClient) { }

  getMatchList(): Observable<Match[]> {
    return this.httpClient.get<Match[]>("http://localhost:1234/matches/getMatches")
  }

  getMatch(match: string): Observable<Match> {
    return this.httpClient.get<Match>("http://localhost:1234/matches/" + match)
  }

  getTeam(teamId: string): Observable<Team> {
    return this.httpClient.get<Team>("http://localhost:1234/teams/" + teamId)
  }

  placeBet(matchBet: MatchBet){
    return this.httpClient.post<MatchBet>("http://localhost:1234/bets/create", matchBet)
  }

  updateMatchBetCount(matchId: string, payload: any){
    return this.httpClient.put<String>("http://localhost:1234/matches/"+matchId+"/updateBetCount", payload)
  }

  login(username: string, password: string){
    return this.httpClient.post<User>("http://localhost:1234/teams/", {
      username: username,
      password: password
    })
  }
}
