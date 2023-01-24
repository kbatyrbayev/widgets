import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {KrishaService} from "../../shared/services/krisha.service";
import {IRegionInfo} from "../../shared/models/model";

@Component({
  selector: 'app-widget-second',
  templateUrl: './widget-second.component.html',
  styleUrls: ['./widget-second.component.scss']
})
export class WidgetSecondComponent implements OnInit, AfterViewInit {

  @ViewChild('svgChart') svgChart!: ElementRef;
  region!: IRegionInfo;
  yAxis: number[] = [];
  svgWidth!: number;
  svgHeight!: number;
  yStep: number = 100;
  xStep: number = 100;
  padding = [60, 30];

  xAxis: string[] = [];

  constructor(private service: KrishaService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.service.selectedRegion$.subscribe(res => {
      if (res.id) {
        this.region = res;
        this.drawChart();
      }
    });
  }

  drawChart() {
    const {x, y} = this.region.data;
    /*prepare y axis*/
    this.yAxis = this.drawYAxis(y);
    this.svgHeight = this.svgChart.nativeElement.clientHeight;
    this.yStep = this.svgHeight / this.yAxis.length;
    /*prepare x axis*/
    this.xAxis = this.drawXAxis(x);
    console.log(this.xAxis)
    this.svgWidth = this.svgChart.nativeElement.clientWidth;
    this.xStep =  (this.svgWidth-this.padding[0]) / this.xAxis.length;
  }

  drawYAxis(y: number[]) {

    return getYAxis(getClosestMaxNumber(), getClosestMinNumber())

    function getClosestMaxNumber() {
      const max = Math.max(...y);
      const val = Number('1' + Array(String(max).length - 1).fill(0).join(''));
      return Math.round((max + val) / 50) * 50
    }

    function getClosestMinNumber() {
      const min = Math.min(...y);
      const val = Number('1' + Array(String(min).length - 1).fill(0).join(''));
      return Math.round((min - val) / 50) * 50
    }

    function getYAxis(max: number, min: number) {
      let avg3 = Math.round((max + min) / 2);
      let avg2 = Math.round((min + avg3) / 2);
      let avg4 = Math.round((max + avg3) / 2);
      return [max, avg4, avg3, avg2, min];
    }

  }

  drawXAxis(x: string[]) {
    return Array.from(new Set(x.map(r => getYearMonth(r))));

    function getYearMonth(date: string) {
      const newDate = new Date(date);
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return `${newDate.getFullYear()} ${months[newDate.getMonth()].substring(0, 3)}`;
    }
  }

  get regionName() {
    return this.region ? this.region.name : '...';
  }

}
