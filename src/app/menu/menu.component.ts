import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
  title = 'circularNav';
  type = 1;
  radius = '12em'; // distance from center
  start = -180; // shift start from 0
  @Input() isOpen = false;
  @Input() navList = [
    {
      title: 'Default item 1',
      link: 'default-item-1'
    },
    {
      title: 'Default item 1',
      link: 'default-item-1'
    },
    {
      title: 'Default item 1',
      link: 'default-item-1'
    },
    {
      title: 'Default item 1',
      link: 'default-item-1'
    },
  ];
  constructor() {}
  toggle() {
    this.isOpen = !this.isOpen;
  }
  ngAfterViewInit() {
    const elements = document.querySelectorAll('.menu-wraper .menu-item');
    if (elements.length > 0) {
      // For even distribution of elements when not full circle
      const numberOfElements = this.type === 1 ? elements.length : elements.length - 1;
      const slice = (360 * this.type) / numberOfElements;
      // Add rotation to each element
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
