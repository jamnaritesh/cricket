import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {HttpClientModule} from '@angular/common/http';
import {WeatherCardComponent} from './ui/weather-card/weather-card.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import { MatchCardComponent } from './ui/match-card/match-card.component';
import { BettingDialogComponent } from './ui/betting-dialog/betting-dialog.component';
import { AppMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    WeatherCardComponent,
    LoginComponent,
    MatchCardComponent,
    BettingDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppMaterialModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [BettingDialogComponent]
})
export class AppModule {
}
