import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from 'src/app/models/match';
import { map } from 'rxjs/operators';
import { RequestHandlerService } from 'src/app/services/request-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: RequestHandlerService) {
  }

  
  matchList: Observable<Match[]>
  ngOnInit() {
    this.matchList = this.service.getMatchList().pipe(
      map((match: Match[])=> { 
        let matchView = match.map((matchListing)=>{
          if(matchListing.team1Bets == 0 && matchListing.team2Bets == 0)
            {
              matchListing.team2Bets = 1
              matchListing.team1Bets = 1
            }
            return matchListing
        })
        return matchView
      })
    )
    
  }
}
