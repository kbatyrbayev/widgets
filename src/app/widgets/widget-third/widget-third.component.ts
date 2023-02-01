import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {KrishaService} from "../../shared/services/krisha.service";
import {IRegionInfo} from "../../shared/models/model";

@Component({
  selector: 'app-widget-third',
  templateUrl: './widget-third.component.html',
  styleUrls: ['./widget-third.component.scss']
})
export class WidgetThirdComponent implements OnInit, AfterViewInit {

  @ViewChild('barChart') barChart!: ElementRef;

  width = 0;
  height = 0;
  yStep = 0;

  regions: IRegionInfo[] = [];
  regionsEx: IRegionInfoEx[] = [];
  constructor(private service: KrishaService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.service.getAnalytics().subscribe(res => {
      this.regions = res.sort((a,b) => a.avg - b.avg);
      console.log(this.regions)
      setTimeout(() => {
        this.generateChart();
      }, 1000)
    })
  }

  max = 0;
  generateChart() {
    this.max = Math.max(...this.regions.map(r => r.avg));
    this.regionsEx = this.regions.map(r => {
      return {
        ...r,
        percent: Math.round(r.avg/this.max * 100),
      }
    });
  }

}

interface IRegionInfoEx extends IRegionInfo {
  percent: number;
}
