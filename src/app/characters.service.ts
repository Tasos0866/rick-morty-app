import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CharactersComponent } from "./characters/characters.component";

@Injectable({
  providedIn: "root"
})
export class CharactersService {
  response: any;
  crap: any;
  constructor(private http: HttpClient) {}

  getCharacter(id: number): Observable<CharactersComponent> {
    return this.http.get<CharactersComponent>(
      "https://rickandmortyapi.com/api/character/" + id
    );
  }
}
