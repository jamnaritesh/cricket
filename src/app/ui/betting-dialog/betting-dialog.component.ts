import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  matchId: string
  teamId: string
  teamName: string
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(){
    console.log("button clicked")
  }

}
