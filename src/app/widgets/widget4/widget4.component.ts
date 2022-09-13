import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget4',
  templateUrl: './widget4.component.html',
  styleUrls: ['./widget4.component.scss']
})
export class Widget4Component implements OnInit {

  total = 19122423;

  data: IData[] = [
    { "region": "Ақмола", "total": 733900, "male": 357263, "female": 376637 },
    { "region": "Ақтөбе", "total": 906201, "male": 440423, "female": 465778 },
    { "region": "Алматы", "total": 2107166, "male": 1043948, "female": 1063218 },
    { "region": "Атырау", "total": 668090, "male": 329666, "female": 338424 },
    { "region": "Батыс Қазақстан", "total": 665854, "male": 323915, "female": 341939 },
    { "region": "Жамбыл", "total": 1149914, "male": 569139, "female": 580775 },
    { "region": "Қарағанды", "total": 1371914, "male": 653189, "female": 718725 },
    { "region": "Қостанай", "total": 857858, "male": 407976, "female": 449882 },
    { "region": "Қызылорда", "total": 827923, "male": 416117, "female": 411806 },
    { "region": "Маңғыстау", "total": 740893, "male": 369339, "female": 371554 },
    { "region": "Павлодар", "total": 747057, "male": 354569, "female": 392488 },
    { "region": "Солтүстік Қазақстан", "total": 537048, "male": 257149, "female": 279899 },
    { "region": "Түркістан", "total": 2075132, "male": 1053949, "female": 1021183 },
    { "region": "Шығыс  Қазақстан", "total": 1356399, "male": 648345, "female": 708054 },
    { "region": "Нұр-Сұлтан қаласы", "total": 1239744, "male": 594742, "female": 645002 },
    { "region": "Алматы қаласы", "total": 2024861, "male": 927897, "female": 1096964 },
    { "region": "Шымкент қаласы", "total": 1112469, "male": 539152, "female": 573317 },
  ];

  constructor() { }

  ngOnInit(): void {
    this.data.forEach(d => {
      d.malePercent = this.calcWidth(d.male, d.total);
      d.femalePercent = this.calcWidth(d.female, d.total);
    });
    console.log(this.data);

  }

  calcWidth(value: number, total: number) {
    return Math.round(value * 100 / total);
  }

}

interface IData {
  region: string;
  total: number;
  male: number;
  female: number;
  malePercent?: number;
  femalePercent?: number;
}