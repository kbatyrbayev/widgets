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
  maxY: number = 0;
  minY: number = 0;
  minX: number = 0;
  maxX: number = 0;
  yAxisLast: number[][] = [];

  points: number[][] = [];
  pointsEx: number[][] = [];
  polyline: string = '';
  polygon: string = '';
  tooltip:{x?: number, y?: number, date?: string, value?: number} = {}

  constructor(private service: KrishaService) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.service.selectedRegion$.subscribe(res => {
      if (res.id) {
        this.region = res;
        setTimeout(() => {
          this.drawChart();
        }, 1000)

      }
    });
  }

  drawChart() {
    const {x, y} = this.region.data;
    /*create y axis*/
    this.yAxis = this.drawYAxis(y);
    this.svgHeight = this.svgChart.nativeElement.clientHeight;
    this.yStep = Math.round((this.svgHeight) / this.yAxis.length);
    /*create x axis*/
    this.xAxis = this.drawXAxis(x);
    this.svgWidth = this.svgChart.nativeElement.clientWidth;
    console.log(this.svgWidth, 'width')
    this.xStep =  Math.round((this.svgWidth-this.padding[0]) / this.xAxis.length);
    /*create dots*/
    this.points = this.drawDots(x, y);
    this.pointsEx = this.points.map(point => point.slice(0,2));
    console.log(this.points)
    const lastPoint = this.points[this.points.length-1];
    this.tooltip = {
      x: lastPoint[0],
      y: lastPoint[1],
      date: lastPoint[2]+'',
      value: lastPoint[3]
    }
    this.polyline = this.pointsEx.map(point => point.join(',')).join(' ');
    this.polygon = `${this.pointsEx[0][0]},${this.getY(this.minY)} ${this.polyline} ${this.pointsEx[this.pointsEx.length-1][0]},${this.getY(this.minY)}`;
    this.yAxisLast = this.yAxis.map(r => [r, this.getY(r)]);
  }

  drawYAxis(y: number[]) {

    this.maxY = getClosestMaxNumber();
    this.minY = getClosestMinNumber();
    return getYAxis(this.maxY, this.minY);

    function getClosestMaxNumber() {
      const max = Math.max(...y);
      //return max;
      const val = Number('1' + Array(String(max).length - 2).fill(0).join(''));
      return Math.round((max + val));
    }

    function getClosestMinNumber() {
      const min = Math.min(...y);
      //return min;
      const val = Number('1' + Array(String(min).length - 2).fill(0).join(''));
      return Math.max((Math.round((min - val) / 50) * 50), 0);
    }

    function getYAxis(max: number, min: number) {
      let avg3 = Math.round((max + min) / 2);
      let avg2 = Math.round((min + avg3) / 2);
      let avg4 = Math.round((max + avg3) / 2);
      return [max, avg4, avg3, avg2, min];
    }

  }

  drawXAxis(x: string[]) {
    this.minX = getFirstDayOfMonth(x[0]).getTime();
    this.maxX = getLastDayOfMonth(x[x.length-1]).getTime();
    return Array.from(new Set(x.map(r => getYearMonth(r))));

    function getYearMonth(date: string) {
      const newDate = new Date(date);
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return `${newDate.getFullYear()} ${months[newDate.getMonth()].substring(0, 3).toUpperCase()}`;
    }

    function getFirstDayOfMonth(date: string) {
      const newDate = new Date(date);
      return new Date(newDate.getFullYear(), newDate.getMonth(), 1);
    }
    function getLastDayOfMonth(date: string) {
      const newDate = new Date(date);
      return new Date(newDate.getFullYear(), newDate.getMonth()+1, 0);
    }
  }

  drawDots(x: string[], y: number[]) {
    let points: any[][] = [];
    for(let i = 0; i < x.length; i++) {
      points.push([this.getX(new Date(x[i]).getTime()), this.getY(y[i]), x[i], y[i]]);
    }
    console.log(points)
    return points;
  }

  getX(value: number) {
    let svgWidth = this.svgWidth - this.padding[0];
    return Math.round(svgWidth - (this.maxX-value) / (this.maxX - this.minX) * svgWidth);
  }

  getY(value: number) {
    const svgHeight = this.svgHeight - this.padding[0];
    return Math.round((this.maxY-value) / (this.maxY-this.minY) * svgHeight);
  }

  get regionName() {
    return this.region ? this.region.name : '...';
  }


  mousemove($event: any, index: number) {
    console.log($event, this.points[index]);
    const point = this.points[index];
    this.tooltip = {
      x: point[0],
      y: point[1],
      date: point[2]+'',
      value: point[3]
    }
  }

}
