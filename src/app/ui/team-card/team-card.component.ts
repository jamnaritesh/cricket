import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import { Team } from 'src/app/models/team';

// import {FbService} from '../../services/fb/fb.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit, OnDestroy {

  @Input()
  teamId: string
  panelOpenState: boolean = false
  
  team: Team

  constructor(private service: RequestHandlerService){}
  ngOnInit(){
    this.service.getTeam(this.teamId)
    .subscribe((team: Team)=>{
      this.team = team
    })
  }
  ngOnDestroy(){}
}
