import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  counter: number;
  minutes: number = 0;
  seconds: number = 0;
  timerRef;
  running: boolean = false;
  startText = 'Start';

  constructor() {
    
   }

  ngOnInit() {  
  
  }

  showTime() {
    this.seconds = this.counter % 5;
    this.minutes = Math.floor(this.counter / 5);
  }

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      const startTime = Math.floor(new Date().getTime() / 1000) - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter =  Math.floor(new Date().getTime() / 1000) - startTime;
      });
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.counter = undefined;
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

  reset() {
    this.clearTimer();
    this.startTimer();
  }
}
