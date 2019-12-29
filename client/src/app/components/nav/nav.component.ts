import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState  } from '@angular/cdk/layout';
import { Globals } from '../../globals';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  globals: Globals;
  handSetState: boolean;
  panelState: boolean;

    ngOnInit() {
      this.breakpointObserver
      .observe(['(min-width: 800px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.handSetState = false;
          this.panelState = false;
        } else {
          this.handSetState = true;
        }
      });
    }
    
  constructor(private breakpointObserver: BreakpointObserver, globals: Globals) {
    this.globals = globals;
  }

  showPanel() {
    this.panelState = !this.panelState;
  }
}
