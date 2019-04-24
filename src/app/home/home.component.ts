import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { send } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characterResults: Character[] = [];
  characters: Info;
  page: number;

  constructor(private apiService: ApiService) {
    this.page = 1;
  }

  ngOnInit() {
    for (let page = 1; page <= 20; page++) {
      this.apiService.getCharacters(page).subscribe(characters => {
        for (const char of characters.results) {
          this.characterResults.push(char);
        }
      });
    }
  }
}
