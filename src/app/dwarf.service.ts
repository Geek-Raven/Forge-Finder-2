import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Http, Headers, Response } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class DwarfService {
  dwarves: Dwarf[] = [];

  favoriteDrink: string[] = [
    "Beer",
    "Mai-Tai",
    "Dragons Blood",
    "Rob Roy",
    "Elf Earwax",
    "Moonshine",
    "Moutain-Dew",
    "Apple Juice"
  ];

  occupations: string[] = [
    "Smith",
    "Forager",
    "Farmer",
    "Bladesmith",
    "Miner",
    "Warrior",
    "Mercenary",
    "Bootlegger",
    "Breeder",
    "Mouth Breather",
    "Ultimate Ladies-Man"
  ];

  clans: string[] = [
    "Silver-Axe",
    "Gold-Dragon",
    "Emerald Jackals",
    "Ruby Wolves",
    "Steel Bears"
  ];

  getDrinks() {
    return this.favoriteDrink;
  }

  getJob() {
    return this.occupations;
  }

  getClan() {
    return this.clans;
  }

  getDwarves(): Observable<Dwarf[]> {
    return this.http.get<Dwarf[]>(
      "https://forge-server-an.herokuapp.com/api/dwarves"
    );
  }

  addDwarf(dwarf: Dwarf) {
    return this.http.post(
      "https://forge-server-an.herokuapp.com/api/dwarves",
      dwarf
    );
  }

  deleteDwarf(id: string) {
    return this.http.delete(
      "https://forge-server-an.herokuapp.com/api/dwarves/" + id
    );
  }

  // addDwarf(dwarf: Dwarf) {
  //   dwarf.id = 1;
  //   this.dwarves.push(dwarf);
  // }

  constructor(private http: HttpClient) {}
}
