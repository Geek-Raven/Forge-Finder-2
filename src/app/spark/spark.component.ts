import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { DwarfService } from "../dwarf.service";

@Component({
  selector: "app-spark",
  templateUrl: "./spark.component.html",
  styleUrls: ["./spark.component.css"]
})
export class SparkComponent implements OnInit {
  constructor(private dwarfService: DwarfService) {}

  dwarves: Dwarf[];

  getDwarves() {
    this.dwarves = this.dwarfService.getDwarves();
  }
  ngOnInit() {
    this.getDwarves();
  }
}
