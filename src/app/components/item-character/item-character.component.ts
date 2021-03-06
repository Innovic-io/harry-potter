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
  @Input() bloodStatus: string;
  @Input() school: string;
  @Input() orderOfThePhoenix: boolean;
  @Input() ministryOfMagic: boolean;
  @Input() dumbledoresArmy: boolean;
  @Input() deathEater: boolean;

  ngOnInit(): void {
  }

}
