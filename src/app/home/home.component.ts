import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { send } from "q";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  currentPageCharacters: AllCharacters;
  characterResults: Character[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    for (let page = 1; page <= 20; page++) {
      this.currentPageCharacters = await this.apiService.getCharacters(page);
      for (let results of this.currentPageCharacters.results) {
        this.characterResults.push(results);
      }
    }
  }
}
