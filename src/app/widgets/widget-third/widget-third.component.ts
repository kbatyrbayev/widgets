import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {KrishaService} from "../../shared/services/krisha.service";
import {IRegionInfo} from "../../shared/models/model";
import {finalize} from "rxjs";

@Component({
  selector: 'app-widget-third',
  templateUrl: './widget-third.component.html',
  styleUrls: ['./widget-third.component.scss'],
})
export class WidgetThirdComponent implements OnInit, AfterViewInit {

  @ViewChild('barChart') barChart!: ElementRef;
  regions: IRegionInfo[] = [];
  regionsEx: IRegionInfoEx[] = [];
  loading = true;
  max = 0;
  min = 0;

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
        setInterval(() => {
          this.interactive();
        }, 5000);
      });
  }

  generateChart() {
    this.max = Math.max(...this.regions.map(r => r.avg));
    this.min = Math.min(...this.regions.map(r => r.avg));
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
    }, 1000);
  }

  interactive() {
    this.regionsEx.forEach(region => {
      const r = this.random();
      region.percent = Math.round(r / this.max * 100);
      region.avg = r;
    });
  }

  random() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

}

interface IRegionInfoEx extends IRegionInfo {
  percent: number;
}
