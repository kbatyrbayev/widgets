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
        this.mapData = res.map(item => {
          return {
            id: item.id,
            avg: item.avg,
            name: this.service.getCitiesOnEnglishById(item.id)
          }
        });

        /* mapping data to cards */
        this.cards = this.mainCitiesIds.map(cityId => {
          const item = this.mapData.find(f => f.id === cityId);
          return {
            id: cityId,
            name: this.service.getCitiesOnEnglishById(cityId),
            avg: item?.avg || 0
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

  getYearMonth(date: string): string {
    const newDate = new Date(date);
    return newDate.getFullYear() + '-' + (newDate.getMonth() + 1);
  }


}

export interface IRegionEx {
  id: number;
  avg: number;
  name: string;
}
