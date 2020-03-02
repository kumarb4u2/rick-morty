import { Component, OnInit } from "@angular/core";
import { FilterService } from "src/app/services/filter.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  getSpecies() {
    return this.filterService.species;
  }

  getGenders() {
    return this.filterService.genders;
  }

  getOrigins() {
    return this.filterService.origins;
  }
}
