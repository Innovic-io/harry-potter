import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUserCircle, faMagic, faHome } from '@fortawesome/free-solid-svg-icons';
import { AppRouting } from '../../models/app';

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
  public appRouting = AppRouting;

  ngOnInit(): void {
  }

  onClick(event) {
    this.clickedIcon.emit(event);
  }
}

