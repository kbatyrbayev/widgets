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
  cards: IRegionEx[] = [
    {geo: 105, geo_title: 'Astana', average_kzt: 0},
    {geo: 2, geo_title: 'Almaty', average_kzt: 0},
    {geo: 278, geo_title: 'Shymkent', average_kzt: 0},
  ];

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
        this.data = res;
        let array: IRegionEx[] = [];
        this.data
          .sort((a, b) => {
            return new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime()
          })
          .forEach(row => {
            const index = array.findIndex(f => f.geo === row.geo);
            if (index === -1) {
              array.push({
                geo: row.geo,
                geo_title: row.geo_title,
                average_kzt: row.average_kzt
              });
            }
          });
        this.mapData = array;
        this.cards.forEach(card => {
          const item = this.mapData.find(f => f.geo === card.geo);
          card.average_kzt = (item && item.average_kzt) || 0;
        });
      });
  }

  getSelectedRegionId(id: number) {
    console.log(id, 'id from map component');
  }

}

export interface IRegionEx {
  geo: number;
  geo_title: string;
  average_kzt: number;
}
