import { Component, OnInit } from '@angular/core';
import { faUserCircle, faMagic, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent implements OnInit {
  public faUserCircle = faUserCircle;
  public faMagic = faMagic;
  public faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}

