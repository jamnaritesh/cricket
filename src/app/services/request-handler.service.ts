import { Injectable } from '@angular/core';
import { Match } from '../models/match';
import { Observable, of } from 'rxjs';
import { MatchScoreCard } from '../models/matchScorecard';
import { Scorecard } from '../models/scorecard';
import { BattingScorecard, BattingRecord } from '../models/battingscorecard';
import { BowlingScorecard, BowlingRecord } from '../models/bowlingscorecard';

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {

  constructor() { }

  getMatchList(): Observable<Match[]> {
    return of(
      [
        { _id: "a",
          team1Name: "kolkata string",
          team2Name: "mumbai string",
          team1: "t1",
          team2: "t2",
          team1Bets: 0,
          team2Bets:0 ,
          date: new Date(),
          won: "",
          live: true,
          matchScorecard: <MatchScoreCard>{
            team1: <Scorecard>{
              batting: <BattingScorecard>{
                records: <BattingRecord[]>[{"4s": 5,"6s":5,"S/R":55.2,B:55,R:110,player:"ABC",wicket:"asas"}],
                extras: 5
              },
              bowling: <BowlingScorecard>{
                records: <BowlingRecord[]>[{M:1,player:"asas",R:55,Econ:88.6,O:88,W:3}]
              }
            },
            team2: <Scorecard>{
              batting: <BattingScorecard>{
                records: <BattingRecord[]>[{"4s": 5,"6s":5,"S/R":55.2,B:55,R:110,player:"ABC",wicket:"asas"}],
                extras: 5
              },
              bowling: <BowlingScorecard>{
                records: <BowlingRecord[]>[{M:1,player:"asas",R:55,Econ:88.6,O:88,W:3}]
              }
            },

          }
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
          matchScorecard: <MatchScoreCard>{
            team1: <Scorecard>{
              batting: <BattingScorecard>{
                records: <BattingRecord[]>[{"4s": 5,"6s":5,"S/R":55.2,B:55,R:110,player:"ABC",wicket:"asas"}],
                extras: 5
              },
              bowling: <BowlingScorecard>{
                records: <BowlingRecord[]>[{M:1,player:"asas",R:55,Econ:88.6,O:88,W:3}]
              }
            },
            team2: <Scorecard>{
              batting: <BattingScorecard>{
                records: <BattingRecord[]>[{"4s": 5,"6s":5,"S/R":55.2,B:55,R:110,player:"ABC",wicket:"asas"}],
                extras: 5
              },
              bowling: <BowlingScorecard>{
                records: <BowlingRecord[]>[{M:1,player:"asas",R:55,Econ:88.6,O:88,W:3}]
              }
            },

          }
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
          matchScorecard: <MatchScoreCard>{
            team1: <Scorecard>{
              batting: <BattingScorecard>{
                records: <BattingRecord[]>[{"4s": 5,"6s":5,"S/R":55.2,B:55,R:110,player:"ABC",wicket:"asas"}],
                extras: 5
              },
              bowling: <BowlingScorecard>{
                records: <BowlingRecord[]>[{M:1,player:"asas",R:55,Econ:88.6,O:88,W:3}]
              }
            },
            team2: <Scorecard>{
              batting: <BattingScorecard>{
                records: <BattingRecord[]>[{"4s": 5,"6s":5,"S/R":55.2,B:55,R:110,player:"ABC",wicket:"asas"}],
                extras: 5
              },
              bowling: <BowlingScorecard>{
                records: <BowlingRecord[]>[{M:1,player:"asas",R:55,Econ:88.6,O:88,W:3}]
              }
            },

          }
        }
      ]
      
    )

  }
}
