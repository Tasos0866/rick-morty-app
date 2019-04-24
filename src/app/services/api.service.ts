import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getCharacters(pageNumber: number = 1): Observable<any> {
    return this.http
      .get("https://rickandmortyapi.com/api/character/?page=" + pageNumber);
  }
}
