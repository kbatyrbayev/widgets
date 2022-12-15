import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {IRegionEx} from "../../widgets/widget-first/widget-first.component";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChildren('region') regions!: QueryList<any>;
  @Input() data: IRegionEx[] = [];
  @Output() selectedRegionId = new EventEmitter<number>();
  currentRegionId = 2;
  isOutsideClick = false;
  constructor() { }

  ngOnInit(): void {
    this.currentRegionId && this.selectedRegionId.emit(this.currentRegionId);
  }

  ngAfterViewInit() {
    this.regions.forEach(region => {
      const id = +region.nativeElement.getAttribute('id');
      const item = this.data.find(f => f.geo === id);
      if (item) {
        region.nativeElement.getElementsByClassName('value')[0].textContent = item.average_kzt;
      }
    });
  }

  selectRegion(target: any) {
    this.isOutsideClick = true;
    for (let i = 0; i < target.path.length; i++) {
      const item = target.path[i];
      if (typeof item.getAttribute !== "undefined" && item.getAttribute('id')) {
        this.currentRegionId = +item.getAttribute('id');
        this.isOutsideClick = false;
        break;
      }
    }
    !this.isOutsideClick && this.selectedRegionId.emit(this.currentRegionId);
  }

}
