import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcs-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {

    countries = [
        {
            alpha: "esp",
            name: "Spain",
            flag: "https://restcountries.eu/data/esp.svg"
        },
        {
            alpha: "fra",
            name: "France",
            flag: "https://restcountries.eu/data/fra.svg"
        },
        {
            alpha: "ita",
            name: "Italy",
            flag: "https://restcountries.eu/data/ita.svg"
        }
    ]

    showDropdownItems: boolean = false;
    countrySelected;

    constructor() { }

    ngOnInit(): void {
        this.countrySelected = this.countries[0]
    }

    handleSelection(country) {
        this.countrySelected = country;
        this.showDropdownItems = false;
    }

}
