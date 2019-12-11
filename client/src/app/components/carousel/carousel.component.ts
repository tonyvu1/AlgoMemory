import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  imgIndex: number = 1;

  constructor() {}

  ngOnInit() {}

  navigateRight() {
    if(this.imgIndex === 3) {
      this.imgIndex = 1;
    } else {
      this.imgIndex += 1;
    }
  }

  navigateLeft() {
    if(this.imgIndex === 1) {
      this.imgIndex = 3;
    } else {
      this.imgIndex -= 1;
    }
  }

  setImg() {
    let img = {
      img1: this.imgIndex === 1,
      img2: this.imgIndex === 2,
      img3: this.imgIndex === 3
    };
    return img;
  }
}
