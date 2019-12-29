import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./components/home/home.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Globals } from "./globals";
import { FormsModule } from "@angular/forms";
import { NavComponent } from "./components/nav/nav.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { StringReversalComponent } from './components/algorithms/string-reversal/string-reversal.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { BubbleSortComponent } from './components/algorithms/bubble-sort/bubble-sort.component';
import { SelectionSortComponent } from './components/algorithms/selection-sort/selection-sort.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, StringReversalComponent, StopwatchComponent, BubbleSortComponent, SelectionSortComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    NgbModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule {}
