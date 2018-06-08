import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { DwarfService } from "../dwarf.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  currentDwarf: Dwarf = new Dwarf();

  favoriteDrink: string[] = [];

  occupations: string[] = [];

  clans: string[] = [];

  submitDwarf() {
    if (
      this.currentDwarf.name &&
      this.currentDwarf.height &&
      this.currentDwarf.beardColor &&
      this.currentDwarf.beardLength &&
      this.currentDwarf.weapon
    ) {
      this.dwarfService
        .addDwarf(this.currentDwarf)
        .subscribe(() => this.router.navigate(["/spark"]));
    }
  }

  constructor(private dwarfService: DwarfService, private router: Router) {}

  ngOnInit() {
    this.favoriteDrink = this.dwarfService.getDrinks();
    this.occupations = this.dwarfService.getJob();
    this.clans = this.dwarfService.getClan();
  }
}
