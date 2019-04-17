import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../../services/weather/weather.service';
import {forkJoin, Subscription} from 'rxjs';
import {UiService} from '../../services/ui/ui.service';
import {concatMap} from 'rxjs/operators';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import { Match } from 'src/app/models/match';
import { MatDialog } from '@angular/material';
import { BettingDialogComponent, DialogData } from 'src/app/ui/betting-dialog/betting-dialog.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  darkMode: boolean;
  matchId: string;
  cityIllustrationPath: string;
  sub1: Subscription;
  sub2: Subscription;
  match: Match


  constructor(public activeRouter: ActivatedRoute, 
    public service: RequestHandlerService, 
    public ui: UiService,
    private dialog: MatDialog) {

  }

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.sub2 = this.activeRouter.paramMap
    .pipe(
      concatMap((route: any) => {
        this.matchId = route.params.city;
        return this.service.getMatch(this.matchId)
      })
    )
    .subscribe( match => {
      this.match = match
    })
    }
  

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

  popup(team: string){
    let teamId = this.match[team]
    let teamName = team + 'Name'
    teamName = this.match[teamName]
    let matchId = this.match._id
    console.log(teamId + " " + teamName + " "+ matchId)
    this.dialog.open(
      BettingDialogComponent, { 
        data: <DialogData>{ 
          teamId: teamId,
          matchId: matchId,
          teamName: teamName
        },
        width: '600px',
        height: '400px'

      }
    )
  }

}
