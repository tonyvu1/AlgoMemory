import { Component, OnInit } from "@angular/core";
import { Globals } from "../../../globals";

@Component({
  selector: "app-recursion1",
  templateUrl: "./recursion1.component.html",
  styleUrls: ["./recursion1.component.scss"]
})
export class Recursion1Component implements OnInit {
  constructor(globals: Globals) {
    globals.title="Recursion Problem 1"
  }

  ngOnInit() {}
}
