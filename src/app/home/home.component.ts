import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { send } from "q";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  characterResults: Character[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    for (let page = 1; page <= 20; page++) {
      this.apiService.getCharacters(page).subscribe(characters => {
        for (let char of characters.results) {
          this.characterResults.push(char);
        }
      });
    }
  }
}
