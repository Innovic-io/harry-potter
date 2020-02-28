import { Component, OnInit } from '@angular/core';
import { ICharacters } from '../../models/characters';
import { CharacterService } from '../../services/character.service';
;

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public charactersTitle = 'Characters';
  public characters: ICharacters[];

  constructor(private http: CharacterService) { }

  ngOnInit(): void {
    this.http.getCharacter()
      .subscribe((data: ICharacters[]) => {
        this.characters = data;
      });
  }

}
