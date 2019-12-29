import { Component, OnInit } from "@angular/core";
import { Globals } from "../../globals";
import { User } from "../../models/user";
import { UserDataService } from "../../services/user-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  usersList: User[] = [];

  constructor(globals: Globals, private _userDS: UserDataService) {
    globals.title = "";
  }

  ngOnInit() {
    this.consoleLogUsers();
  }

  consoleLogUsers() {
    this._userDS.getUsers().subscribe(data => {
      this.usersList = data;
      console.log(this.usersList);
    });
  }
}
