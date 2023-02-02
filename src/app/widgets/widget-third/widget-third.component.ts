import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {KrishaService} from "../../shared/services/krisha.service";
import {IRegionInfo} from "../../shared/models/model";
import {debounceTime, finalize} from "rxjs";

@Component({
  selector: 'app-widget-third',
  templateUrl: './widget-third.component.html',
  styleUrls: ['./widget-third.component.scss'],
})
export class WidgetThirdComponent implements OnInit, AfterViewInit {

  @ViewChild('barChart') barChart!: ElementRef;

  width = 0;
  height = 0;
  yStep = 0;

  regions: IRegionInfo[] = [];
  regionsEx: IRegionInfoEx[] = [];
  loading = true;

  constructor(private service: KrishaService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.service.getAnalytics()
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500)
        })
      )
      .subscribe(res => {
      this.regions = res.sort((a, b) => a.avg - b.avg);
      this.generateChart();
    })
  }

  max = 0;

  generateChart() {
    this.max = Math.max(...this.regions.map(r => r.avg));
    this.regionsEx = this.regions.map(r => {
      return {
        ...r,
        percent: 0,
      }
    });
    setTimeout(() => {
      this.regionsEx.forEach(region => {
        region.percent = Math.round(region.avg / this.max * 100);
      });
    }, 1000)
  }

}

interface IRegionInfoEx extends IRegionInfo {
  percent: number;
}
