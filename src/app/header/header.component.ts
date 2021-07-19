import { Output } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  isRecipeBookClicked: boolean = true;
  @Output() menuClickedEvent: EventEmitter<string> = new EventEmitter<string>(
    false
  );

  onSelect(selected: string) {
    console.log("Selected", selected);
    this.menuClickedEvent.emit(selected);
  }
}
