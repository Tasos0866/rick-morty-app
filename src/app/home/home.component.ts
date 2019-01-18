import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  currentPageCharacters: Character[];
  allCharacters: Character[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    for (let page = 1; page <= 20; page++) {
      this.apiService.getCharacters(page).subscribe(characters => {
        this.currentPageCharacters = characters.results;
        this.allCharacters.concat(this.currentPageCharacters);
      });
    }
  }
}
