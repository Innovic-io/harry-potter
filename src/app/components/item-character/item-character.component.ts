import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-character',
  templateUrl: './item-character.component.html',
  styleUrls: ['./item-character.component.css']
})
export class ItemCharacterComponent implements OnInit {
  @Input() name: string;
  @Input() role: string;
  @Input() house: string;
  @Input() school: string;
  @Input() bloodStatus: string;
  @Input() species: string;


  ngOnInit(): void {
  }

}
