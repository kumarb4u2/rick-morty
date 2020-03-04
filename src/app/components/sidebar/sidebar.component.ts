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

  getAttributes() {
    return this.filterService.attribute;
  }

  setChecked(value: string, cat: string, checked: boolean) {
    this.filterService.setChecked(value, cat, checked);
  }
}
