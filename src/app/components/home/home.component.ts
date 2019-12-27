import { Component, OnInit } from "@angular/core";
import { Globals } from "../../globals";
import { User } from "../../models/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  usersList: User[] = [];

  constructor(globals: Globals) {
    globals.title = "";
  }

  ngOnInit() {

  }

}
