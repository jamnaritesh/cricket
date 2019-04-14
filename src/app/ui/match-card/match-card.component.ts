import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherService} from '../../services/weather/weather.service';
import {UiService} from '../../services/ui/ui.service';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';
import { Match } from 'src/app/models/match';
// import {FbService} from '../../services/fb/fb.service';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit, OnDestroy {

  @Input() match: Match
  darkMode: boolean;
  sub1: Subscription;


  constructor(public router: Router,
              public ui: UiService) {
  }

  ngOnInit() {
    this.sub1 = this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.match.team1Name
  }

  openDetails() {
      this.router.navigateByUrl('/details/' + this.match._id);
  }

}
