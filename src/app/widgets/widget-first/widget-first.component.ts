import {Component, OnInit} from '@angular/core';
import {KrishaService} from "../../shared/services/krisha.service";
import {IRegionInfo} from "../../shared/models/model";
import {finalize} from "rxjs";

@Component({
  selector: 'app-widget-first',
  templateUrl: './widget-first.component.html',
  styleUrls: ['./widget-first.component.scss']
})
export class WidgetFirstComponent implements OnInit {

  data: IRegionInfo[] = [];
  mapData: IRegionEx[] = [];
  loading = true;
  mainCitiesIds = [105, 2, 278]; // Astana, Almaty, Shymkent
  cards: IRegionEx[] = [];

  constructor(private service: KrishaService) {
  }

  ngOnInit(): void {
    this.service.getAnalytics()
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1000)
        })
      )
      .subscribe(res => {
        /* prepare data to map component */
        this.mapData = [];
        this.data = res;
        console.log(this.data)
        /* sorting data, then to find last city */
        const data = this.data.sort((a, b) => new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime());
        for(let entry of this.service.cities.entries()) {
          const item = data.find(f => f.geo === entry[0]);
          this.mapData.push({
            geo: entry[0],
            geo_title: entry[1],
            average_kzt: item ? item.average_kzt : 0
          });
        }

        /* mapping data to cards */
        this.cards = this.mainCitiesIds.map(cityId => {
          const item = this.mapData.find(f => f.geo === cityId);
          return {
            geo: cityId,
            geo_title: this.service.getCitiesOnEnglishById(cityId),
            average_kzt: item?.average_kzt || 0
          }
        });
      });
  }

  getSelectedRegionId(id: number) {
    console.log(id, 'id from map component');
  }

  getSelectedRange(value: number) {
    console.log(value, 'selected range')
  }

}

export interface IRegionEx {
  geo: number;
  geo_title: string;
  average_kzt: number;
}
