import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {IRegionInfo} from "../../shared/models/model";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChildren('region') regions!: QueryList<ElementRef>;
  @Input() data: IRegionInfo[] = [];
  @Output() selectedRegionId = new EventEmitter<number>();
  currentRegionId = 2;
  constructor(private decimalPipe: DecimalPipe) { }

  ngOnInit(): void {
    this.currentRegionId && this.selectedRegionId.emit(this.currentRegionId);
  }

  ngAfterViewInit() {
    this.regions.forEach(region => {
      const id = +region.nativeElement.getAttribute('id');
      const item = this.data.find(f => f.id === id);
      if (item) {
        region.nativeElement.getElementsByClassName('value')[0].textContent = this.decimalPipe.transform(item.avg);
        region.nativeElement.getElementsByClassName('city')[0].textContent = item.name;
      }
    });
  }

  selectRegion(target: any) {
    let id: number;
    if (target && target.parentNode) {
      id = +target.parentNode.getAttribute('id');
      this.currentRegionId = id;
      this.selectedRegionId.emit(this.currentRegionId);
    }
  }

}
