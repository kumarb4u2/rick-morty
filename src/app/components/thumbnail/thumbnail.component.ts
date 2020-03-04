import { Component, OnInit, Input } from "@angular/core";
import { Character } from "src/app/models/character";

@Component({
  selector: "app-thumbnail",
  templateUrl: "./thumbnail.component.html",
  styleUrls: ["./thumbnail.component.scss"]
})
export class ThumbnailComponent implements OnInit {
  @Input()
  character: Character;
  constructor() {}

  ngOnInit(): void {}
}
