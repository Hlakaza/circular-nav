import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'circularNav';
  navList = [
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

}
