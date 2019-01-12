import { Component, OnInit } from "@angular/core";
import { CharactersComponent } from "../characters/characters.component";
import { CharactersService } from "../characters.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private http: HttpClient;

  constructor() {}

  ngOnInit() {
    new CharactersComponent(new CharactersService(this.http), 2);
  }
}
