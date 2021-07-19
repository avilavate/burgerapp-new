import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'burger-app';
  selectedMenu: string = "New Order";

  renderComponents(event: string) {
    console.dir(event);
    this.selectedMenu = event;
  }
}
