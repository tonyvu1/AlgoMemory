import { Component, OnInit } from "@angular/core";
import { Globals } from "../../../globals";
import { trigger, transition, animate, style } from "@angular/animations";

@Component({
  selector: "app-selection-sort",
  templateUrl: "./selection-sort.component.html",
  styleUrls: ["./selection-sort.component.scss"],
  animations: [
    trigger("hide", [
      transition(":enter", [
        style({ opacity: "0" }),
        animate("200ms linear", style({ opacity: "1" }))
      ]),
      transition(":leave", [animate("200ms linear", style({ opacity: "0" }))])
    ])
  ]
})
export class SelectionSortComponent implements OnInit {
  running: boolean = false;
  outcome: string = " ";
  answerNoSpaces: string = "";
  answer: string = "";
  checked: boolean = false;
  counter: number;
  minutes: number = 0;
  seconds: number = 0;
  timerRef;

  // Change solution based on problem
  solution: string =
    'functionsort(arr){varselected;for(vari=0;i<arr.length-1;i++){selected=i;varmin=arr[selected];for(varj=i;j<arr.length-1;j++){if(min>arr[j+1]){min=arr[j+1];selected=j+1;}}if(i!=selected){vartemp=arr[i];arr[i]=arr[selected];arr[selected]=temp;}}}';

  constructor(globals: Globals) {
    globals.title = "Recursion";
  }

  ngOnInit() {}

  showTime() {
    this.seconds = this.counter % 60;
    this.minutes = Math.floor(this.counter / 60);
  }

  startTimer() {
    if (this.running) {
      const startTime =
        Math.floor(new Date().getTime() / 1000) - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Math.floor(new Date().getTime() / 1000) - startTime;
      });
    } else {
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.counter = undefined;
    clearInterval(this.timerRef);
  }

  reset() {
    this.clearTimer();
    this.checked = false;
    this.answer = "";
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

  start() {
    this.running = !this.running;
    this.startTimer();
    if (this.checked) {
      this.checked = false;
    }
  }

  check() {
    this.running = !this.running;
    this.startTimer();
    this.compare();
    this.checked = true;
    this.showTime();
  }

  refresh(): void {
    window.location.reload();
  }

  compare() {
    var numOfSpaces = 0;
    var temp = "";
    var str = this.answer;
    var ar = [];

    // Reset answerNoSpaces
    this.answerNoSpaces = "";

    ar = str.split("");

    // Bubble sort algorithm to move all spaces to end of array
    for (var i = 0; i < ar.length; i++) {
      for (var j = 0; j < ar.length - 1; j++) {
        if (ar[j] === " " || ar[j] === "\n" || ar[j] === "\t") {
          temp = ar[j];
          ar[j] = ar[j + 1];
          ar[j + 1] = temp;
        }
      }
    }

    // Count numOfSpaces and then loop through and delete
    for (var i = 0; i < ar.length; i++) {
      if (ar[i] === " " || ar[i] === "\n" || ar[i] === "\t") {
        numOfSpaces++;
      }
    }
    for (var i = 0; i < numOfSpaces; i++) {
      ar.pop();
    }

    for (var i = 0; i < ar.length; i++) {
      this.answerNoSpaces += ar[i];
    }

    if (this.answerNoSpaces === this.solution) {
      this.outcome = "CORRECT!";
    } else {
      this.outcome = "INCORRECT";
    }

    console.log(ar);
    console.log(this.answerNoSpaces);
  } // end compare()
}
