import {MatExpansionModule, MatDialogModule, MatInputModule, MatButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatDialogModule, MatInputModule, MatButtonModule, MatExpansionModule],
  exports: [MatDialogModule, MatInputModule, MatButtonModule, MatExpansionModule],
})
export class AppMaterialModule { }