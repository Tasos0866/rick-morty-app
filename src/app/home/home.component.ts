import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characterResults: Character[] = [];
  page: number;

  constructor(private apiService: ApiService) {
    this.page = 1;
  }

  ngOnInit() {
    // p is the number of the page.
    for (let p = 1; p <= 20; p++) {
      this.apiService.getCharacters(p).subscribe(characters => {
        for (const char of characters.results) {
          this.characterResults.push(char);
        }
      });
    }
    console.log(this.characterResults);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "ArrowLeft" && this.page > 1) {
      this.page--;
    } else if (event.key === "ArrowRight" && this.page < 50) {
      this.page++;
    }
  }
}