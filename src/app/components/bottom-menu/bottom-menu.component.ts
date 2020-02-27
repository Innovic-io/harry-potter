import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faUserCircle, faMagic, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent implements OnInit {

  @Output() clickedIcon = new EventEmitter<string>();
  public faUserCircle = faUserCircle;
  public faMagic = faMagic;
  public faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
  this.clickedIcon.emit(event);
  console.log(event);
  }
}

