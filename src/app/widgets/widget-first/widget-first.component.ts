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
  loading = true;
  mainCitiesIds = [105, 2, 278]; // Astana, Almaty, Shymkent
  cards: IRegionInfo[] = [];

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
        /* mapping data to cards */
        this.cards = this.data.filter(f => this.mainCitiesIds.includes(f.id));
      });
  }

  getSelectedRegionId(id: number) {
    this.service.setRegion(this.data.find(f => f.id === id));
  }

}
