import { Component, OnInit } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-nav-guest",
  templateUrl: "./nav-guest.component.html",
  styleUrls: ["./nav-guest.component.scss"]
})
export class NavGuestComponent implements OnInit {
  isHandset: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(["(min-width: 970px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isHandset = false;
        } else {
          this.isHandset = true;
        }
      });
  }
}
