import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-month-range',
  templateUrl: './month-range.component.html',
  styleUrls: ['./month-range.component.scss']
})
export class MonthRangeComponent implements OnInit {

  @Output() selectedRange = new EventEmitter<number>();

  ranges:IRange[] = [
    {value: 1, display: '1M'},
    {value: 2, display: '2M'},
    {value: 6, display: '6M'},
    {value: -1, display: 'All time'},
  ];
  activeRange: IRange;

  constructor() {
    this.activeRange = this.ranges[0];
  }

  ngOnInit(): void {
  }
  selectRange(range: IRange) {
    this.activeRange = range;
    this.selectedRange.emit(range.value);
  }

}

interface IRange {
  value: number;
  display: string;
}
