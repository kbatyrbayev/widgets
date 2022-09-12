import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss']
})
export class Widget2Component implements OnInit {

  total = 19122423;
  data:IData[] = [
    { name: 'Ақмола', value: 733900 },
    { name: 'Ақтөбе', value: 906201 },
    { name: 'Алматы', value: 2107166 },
    { name: 'Атырау', value: 668090 },
    { name: 'Батыс Қазақстан', value: 665854 },
    { name: 'Жамбыл', value: 1149914 },
    { name: 'Қарағанды', value: 1371914 },
    { name: 'Қостанай', value: 857858 },
    { name: 'Қызылорда', value: 827923 },
    { name: 'Маңғыстау', value: 740893 },
    { name: 'Павлодар', value: 747057 },
    { name: 'Солтүстік Қазақстан', value: 537048 },
    { name: 'Түркістан', value: 2075132 },
    { name: 'Шығыс  Қазақстан', value: 1356399 },
    { name: 'Нұр-Сұлтан қаласы', value: 1239744 },
    { name: 'Алматы қаласы', value: 2024861 },
    { name: 'Шымкент қаласы', value: 1112469 },
  ];

  constructor() { }

  ngOnInit(): void {
    this.data.forEach(d => {
      d.calc = this.calcWidth(d.value);
    });    
  }

  calcWidth(value: number) {
    return value * 100 / this.total;
  }

}

interface IData {
  name: string;
  value: number;
  calc?: number;
}