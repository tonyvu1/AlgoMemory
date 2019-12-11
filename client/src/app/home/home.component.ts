import { Component, OnInit } from "@angular/core";
import { Globals } from "../globals";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  globals: Globals;

  constructor(globals: Globals) {
    this.globals = globals;
  }

  ngOnInit() {}
}
