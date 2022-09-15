import { Component, OnInit } from '@angular/core';
import { AreaInfo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drug-expertise';
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  areas: AreaInfo [] = [
    {
      'rectangleId': 'rectangle-1',
      'pageNumber': 1,
      'rect': {
        'height': 127,
        'width': 646,
        'x1': 60.5,
        'x2': 706.5,
        'y1': 257,
        'y2': 384
      },
      'isDelete': false
    },
    {
      'rectangleId': 'rectangle-2',
      'pageNumber': 3,
      'rect': {
        'height': 141,
        'width': 636,
        'x1': 66.921875,
        'x2': 702.921875,
        'y1': 226,
        'y2': 367
      },
      'isDelete': false
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
