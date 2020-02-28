import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Output() searchValue = new EventEmitter<string>();

  constructor() {
  }

  onSearch(event) {
    this.searchValue.emit(event.target.value);
  }

  ngOnInit(): void {}
}


