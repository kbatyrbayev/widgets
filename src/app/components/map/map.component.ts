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
import {IRegionEx} from "../../widgets/widget-first/widget-first.component";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChildren('region') regions!: QueryList<ElementRef>;
  @Input() data: IRegionEx[] = [];
  @Output() selectedRegionId = new EventEmitter<number>();
  currentRegionId = 2;
  constructor(private decimalPipe: DecimalPipe) { }

  ngOnInit(): void {
    this.currentRegionId && this.selectedRegionId.emit(this.currentRegionId);
  }

  ngAfterViewInit() {
    this.regions.forEach(region => {
      const id = +region.nativeElement.getAttribute('id');
      const item = this.data.find(f => f.geo === id);
      if (item) {
        region.nativeElement.getElementsByClassName('value')[0].textContent = this.decimalPipe.transform(item.average_kzt);
        region.nativeElement.getElementsByClassName('city')[0].textContent = item.geo_title;
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
