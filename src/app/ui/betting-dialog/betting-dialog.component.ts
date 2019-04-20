import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatchBet } from 'src/app/models/matchbet';
import { RequestHandlerService } from 'src/app/services/request-handler.service';
import { merge, concat } from 'rxjs/operators';

export interface DialogData {
  matchId: string
  teamId: string
  teamName: string
  teamNumber: string
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'betting-dialog',
  templateUrl: './betting-dialog.component.html',
  styleUrls: ['./betting-dialog.component.css']
})
export class BettingDialogComponent {
  qty: number = 0
  constructor(
    public dialogRef: MatDialogRef<BettingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service: RequestHandlerService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(){
    let matchBet = <MatchBet>{
      match_id: this.data.matchId,
      team: this.data.teamId,
      user_id: "asasas", // TODO: add user from login service
      amount: this.qty,
      result: "ND"
    }
    let payload= {}
    let betString = this.data.teamNumber+"Bets"
    payload[betString] = 1
    this.service.placeBet(matchBet).pipe(
      concat(
        this.service.updateMatchBetCount(this.data.matchId, payload)
      )
    ).subscribe()

    this.dialogRef.close()
    console.log("button clicked")
  }

}
