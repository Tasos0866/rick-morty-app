import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  styleUrls: ['./characters.component.css'],
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('character') character: Character;

  constructor() { }

  ngOnInit() { }
}
