import { Component, OnInit } from "@angular/core";
import { CharactersService } from "../characters.service";

@Component({
  selector: "app-characters",
  styleUrls: ["./characters.component.css"],
  templateUrl: "./characters.component.html"
})
export class CharactersComponent implements OnInit {
  response: any;

  constructor(
    private charactersService: CharactersService,
    private id: number
  ) {
    this.charactersService = charactersService;
    this.id = id;
  }

  ngOnInit() {
    let obs = this.charactersService.getCharacter(this.id);
    obs.subscribe(response => {
      this.response = response;
    });
  }
}
