import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public appTitle = 'Harry Potter';
  public search: string;
  public houses = [
    {
      name: 'Gryffindor',
      mascot: 'lion',
      school: 'Hogwarts School of Witchcraft and Wizardry',
      members: 12
    },
    {
      name: 'Gryffindor',
      mascot: 'lion',
      school: 'Hogwarts School of Witchcraft and Wizardry',
      members: 12
    },
    {
      name: 'Gryffindor',
      mascot: 'lion',
      school: 'Hogwarts School of Witchcraft and Wizardry',
      members: 12
    }
  ];
  onSearch(event) {
    this.search = event;
  }
    constructor() { }

  ngOnInit(): void {
  }

}
