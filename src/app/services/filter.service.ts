import { Injectable } from "@angular/core";
import { Character } from "../models/character";

@Injectable({
  providedIn: "root"
})
export class FilterService {
  private _searchText: string;
  private _sortField: string;
  private _sortOrder: string;
  private _species: string[] = [];
  private _genders: string[] = [];
  private _origins: string[] = [];

  set searchText(value) {
    this._searchText = value;
  }

  get searchText() {
    return this._searchText;
  }
  set sortField(value) {
    this._sortField = value;
  }

  get sortField() {
    return this._sortField;
  }
  set sortOrder(value) {
    this._sortOrder = value;
  }

  get sortOrder() {
    return this._sortOrder;
  }
  set species(value) {
    this._species = value;
  }

  get species() {
    return this._species;
  }

  set genders(value) {
    this._genders = value;
  }

  get genders() {
    return this._genders;
  }

  set origins(value) {
    this._origins = value;
  }

  get origins() {
    return this._origins;
  }

  setFilterValues(characters: Character[]) {
    for (const character of characters) {
      this._species.push(character.species);
      this._genders.push(character.gender);
      this._origins.push(character.origin.name);
    }
    this.species = this._species.filter((v, i, a) => a.indexOf(v) === i);
    this.genders = this._genders.filter((v, i, a) => a.indexOf(v) === i);
    this.origins = this._origins.filter((v, i, a) => a.indexOf(v) === i);
  }
  constructor() {}
}
