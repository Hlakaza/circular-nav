import { Component, AfterViewInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'circularNav';
  type = 1;
  radius = '12em'; // distance from center
  start = -180; // shift start from 0
  isOpen = false;
  constructor() {}
  toggle() {
    this.isOpen = !this.isOpen;
  }
  ngAfterViewInit() {
    const elements = document.querySelectorAll('.menu-wraper .menu-item');
    if (elements.length > 0) {
      // adj for even distro of elements when not full circle
      const numberOfElements = this.type === 1 ? elements.length : elements.length - 1;
      const slice = (360 * this.type) / numberOfElements;
      elements.forEach((item, index) => {
        const rotate = slice * index + this.start;
        const rotateReverse = 180;
        item.setAttribute(
          'style',
          `transform: rotate(${rotate}deg)
          translate(${this.radius})
          rotate(${rotateReverse}deg)`
        );
      });
    }
  }
}
