import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-month-range',
  templateUrl: './month-range.component.html',
  styleUrls: ['./month-range.component.scss']
})
export class MonthRangeComponent implements OnInit {

  ranges:IRange[] = [
    {value: 1, display: '1M'},
    {value: 2, display: '2M'},
    {value: 6, display: '6M'},
    {value: null, display: 'All time'},
  ];
  activeRange: IRange;

  constructor() {
    this.activeRange = this.ranges[0];
  }

  ngOnInit(): void {
  }
  selectRange(range: IRange) {
    this.activeRange = range;
  }

}

interface IRange {
  value: number | null;
  display: string;
}
