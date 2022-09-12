import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedRegion = '';
  selectRegion(region: string) {
    if (this.selectedRegion === region) {
      this.selectedRegion = '';
    } else {
      this.selectedRegion = region;
    }
  }

}
