import { Component, OnInit } from "@angular/core";
import { Globals } from "../../../globals";

@Component({
  selector: "app-recursion1",
  templateUrl: "./recursion1.component.html",
  styleUrls: ["./recursion1.component.scss"]
})
export class Recursion1Component implements OnInit {
  running: boolean = false;
  answer: string = "";
  solution: string = "";
  isCorrect: boolean;
  test: string = "";

  constructor(globals: Globals) {
    globals.title = "Recursion Problem 1";
  }

  ngOnInit() {}

  compare() {
    var numOfSpaces = 0;
    var temp = "";
    var str = this.answer;
    var ar = str.split("");

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

    console.log(ar);

    /* if(this.answer === this.solution) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    } */
  }

  runStyle() {
    let runStyle = {
      on: this.running === true,
      off: this.running === false
    };
    return runStyle;
  }
}
