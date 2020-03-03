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

  selectSpecies(value: string, cat: string, checked: boolean) {
    const selectedItems: string[] = this.filterService.selectedFilters[cat];
    const itemIndex = selectedItems?.indexOf(value);
    if (itemIndex === -1) {
      selectedItems.push(value);
    } else {
      selectedItems.splice(itemIndex, 1);
    }
    this.filterService.selectedFilters = {
      ...this.filterService.selectedFilters,
      [cat]: selectedItems
    };
  }
}
