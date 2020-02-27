import {Component, Input, OnInit} from '@angular/core';
import {IHouses} from '../../models/houses';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() houses: IHouses[];
  @Input() search: string;

  constructor() { }

  ngOnInit(): void {
  }

}
