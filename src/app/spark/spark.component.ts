import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { DwarfService } from "../dwarf.service";
import { Http, Headers, Response } from "@angular/http";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-spark",
  templateUrl: "./spark.component.html",
  styleUrls: ["./spark.component.css"]
})
export class SparkComponent implements OnInit {
  constructor(private dwarfService: DwarfService, private http: HttpClient) {}

  dwarves: Dwarf[];

  getDwarves() {
    //this.dwarves = this.dwarfService.getDwarves();
    this.dwarfService.getDwarves().subscribe(d => {
      this.dwarves = d;
    });
  }

  deleteDwarf(id: string) {
    this.dwarfService.deleteDwarf(id).subscribe();
    console.log(id);
    this.dwarves = this.dwarves.filter(x => _id != id);
  }

  ngOnInit() {
    this.getDwarves();
  }
}
