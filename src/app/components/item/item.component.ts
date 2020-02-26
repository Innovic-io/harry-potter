import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() name: string;
  @Input() mascot: string;
  @Input() school: string;
  @Input() members: string;

  constructor() {}

  ngOnInit(): void { }

}
