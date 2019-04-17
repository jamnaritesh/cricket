import {MatDialogModule, MatInputModule, MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatDialogModule, MatInputModule, MatButtonModule],
  exports: [MatDialogModule, MatInputModule, MatButtonModule],
})
export class AppMaterialModule { }