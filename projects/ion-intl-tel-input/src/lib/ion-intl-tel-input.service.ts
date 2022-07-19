import { Injectable } from "@angular/core";

import { CountryI } from "./models/country.model";
import { countries } from "./data/countries";

import { translationPrefix } from "./data";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class IonIntlTelInputService {
  translationPrefix = `${translationPrefix}.`;

  countryList: CountryI[] = countries;

  constructor(private translate: TranslateService) {}

  getListOfCountries() {
    return this.countryList.map((x) => {
      this.translate.get(translationPrefix + "." + x.isoCode).subscribe((y) => {
        x.name = y;
      });
      return x;
    });
  }
}
