import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string;
  @Input() isSearchOn = true;
  @Output() searchValue = new EventEmitter<string>();

  onSearch(event) {
    this.searchValue.emit(event.target.value);
  }
}


