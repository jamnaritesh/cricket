import { Injectable } from '@angular/core';
import { Match } from '../models/match';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {

  constructor() { }

  getMatchList(): Observable<Match[]> {
    return of(
      [
        { _id: "a",
          team1Name: "csk",
          team2Name: "rcb",
          team1: "t1",
          team2: "t2",
          team1Bets: 0,
          team2Bets:0 ,
          date: new Date(),
          won: "",
          live: true,
        },
        { _id: "b",
          team1Name: "something else",
          team2Name: "nothing else",
          team1: "t1",
          team2: "t2",
          team1Bets: 5,
          team2Bets:3 ,
          date: new Date(),
          won: "",
          live: false,
         
        },
        { _id: "c",
          team1Name: "something else",
          team2Name: "nothing else",
          team1: "t1",
          team2: "t2",
          team1Bets: 5,
          team2Bets:3 ,
          date: new Date(),
          won: "",
          live: false,

        }
      ]
      
    )

  }

  getMatch(match: string): Observable<Match> {
    return of(
        { _id: "a",
          team1Name: "csk",
          team2Name: "rcb",
          team1: "t1",
          team2: "t2",
          team1Bets: 0,
          team2Bets:0 ,
          date: new Date(),
          won: "",
          live: true,
        }
    )
  }
}
