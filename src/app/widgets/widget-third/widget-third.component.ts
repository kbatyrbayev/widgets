import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-third',
  templateUrl: './widget-third.component.html',
  styleUrls: ['./widget-third.component.scss']
})
export class WidgetThirdComponent implements OnInit {

  types = [
    {id: 1, name: 'brick', value: '16254'},
    {id: 2, name: 'panel', value: '17300'},
    {id: 3, name: 'monolithic', value: '20000'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
