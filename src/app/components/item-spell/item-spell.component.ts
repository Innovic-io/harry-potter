import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-spell',
  templateUrl: './item-spell.component.html',
  styleUrls: ['./item-spell.component.css']
})
export class ItemSpellComponent implements OnInit {
  @Input() spell: string;
  @Input() type: string;
  @Input() effect: string;

  ngOnInit(): void {
  }

}
