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

  submitDwarf() {
    if (
      this.currentDwarf.name &&
      this.currentDwarf.height &&
      this.currentDwarf.beardColor &&
      this.currentDwarf.beardLength &&
      this.currentDwarf.weaponOfChoice
    ) {
      this.dwarfService.addDwarf(this.currentDwarf);
      this.router.navigate(["/spark"]);
    }
  }

  constructor(private dwarfService: DwarfService, private router: Router) {}

  ngOnInit() {}
}
