import { Component, OnInit, Input } from "@angular/core";
import { Character } from "src/app/models/character";

@Component({
  selector: "app-single-character",
  templateUrl: "./single-character.component.html",
  styleUrls: ["./single-character.component.scss"]
})
export class SingleCharacterComponent implements OnInit {
  @Input()
  character: Character;

  constructor() {}

  ngOnInit(): void {}
}
