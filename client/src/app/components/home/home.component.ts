import { Component, OnInit } from "@angular/core";
import { Globals } from "../../globals";
import { UserDataService } from "../../services/user-data.service";
import { User } from "../../models/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  globals: Globals;
  usersList: User[] = [];

  constructor(globals: Globals, private _userDS: UserDataService) {
    this.globals = globals;
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
