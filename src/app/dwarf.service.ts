import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";
@Injectable({
  providedIn: "root"
})
export class DwarfService {
  dwarves: Dwarf[] = [];

  getDwarves() {
    return this.dwarves;
  }

  addDwarf(dwarf: Dwarf) {
    dwarf.id = 1;
    this.dwarves.push(dwarf);
  }

  constructor() {}
}
