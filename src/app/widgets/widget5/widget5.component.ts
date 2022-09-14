import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-widget5',
  templateUrl: './widget5.component.html',
  styleUrls: ['./widget5.component.scss']
})
export class Widget5Component implements OnInit, AfterViewInit {


  data = [
    { year: 2014, value: 17165239, val: 17},
    { year: 2015, value: 17417447, val: 17},
    { year: 2016, value: 17670957, val: 17},
    { year: 2017, value: 17926000, val: 17},
    { year: 2018, value: 18157337, val: 18},
    { year: 2019, value: 18395567, val: 18},
    { year: 2020, value: 18632169, val: 18},
    { year: 2021, value: 19177128, val: 19},
    { year: 2022, value: 19122423, val: 19},
  ];

  @ViewChild('wrapper', {static: true}) wrapper!: ElementRef;
  width = 0;
  height = 0;
  padding = 30;
  xStep = 0;
  yStep = 0;

  @ViewChild('canvas', {static: true}) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  getMainParams() {
    this.height = this.wrapper.nativeElement.offsetHeight;
    this.width = this.wrapper.nativeElement.offsetWidth;
    console.log(this.height, this.width, 'h and w');
  }

  ngAfterViewInit(): void {
      this.getMainParams();
      this.cdr.detectChanges();
      this.drawCanvas();
  }

  drawCanvas() {
    console.log('drawcanvas');
    let c = this.ctx;
    c = this.canvas.nativeElement.getContext('2d')!;

    /* draw lines to x and y axis start */
    c.beginPath();
    c.lineWidth = 2;
    c.moveTo(this.padding, this.padding);
    c.lineTo(this.padding, this.height - this.padding);
    c.lineTo(this.width - this.padding, this.height - this.padding);
    c.strokeStyle = '#fff';
    c.stroke(); 
    c.closePath();
    /* draw lines to x and y axis end */


    /* draw text and vertical small lines for horizontal line  start */
    c.beginPath();
    const values = new Set();
    this.data.forEach(r => {
      values.add(Math.floor(r.value/1000000))
    });
    this.xStep = Math.floor((this.height-this.padding-3) / values.size);
    c.fillStyle = "black"; 
    const newValues = Array.from(values).reverse();
    for (let i = 0; i < newValues.length; i++) {
      c.font='bold 10px Arial';
      c.fillStyle = '#fff';
      c.fillText(newValues[i]+'M', 2, i * this.xStep+this.padding+10);//+10 это отступ для текста
      c.lineWidth = 2;
      c.beginPath();
      c.moveTo(25, i * this.xStep+this.padding+7);//+7 отступ для линии
      c.lineTo(30, i * this.xStep+this.padding+7);
      c.stroke();
    }
    /* draw text and vertical small lines for y(cross) axis line  end */

    /* drat text and horizontal small lines for x(main) axis line start*/
    const years = this.data.map(r => r.year);
    this.yStep = Math.floor((this.width-this.padding) / years.length);
    for(let i = 0; i < years.length; i++) {
      c.fillText(years[i]+'', i*this.yStep+this.padding-5, this.height-this.padding/2);
      c.beginPath();
      c.moveTo(i*this.yStep+this.padding+7, this.height-this.padding-5);
      c.lineTo(i*this.yStep+this.padding+7, this.height-this.padding+5);
      c.stroke();
      c.closePath();
    }
    /* drat text and horizontal small lines for x(main) axis line end*/


    /* draw line chart by x and y start*/
    c.beginPath();
    for(let i = 0; i < this.data.length; i++) {
      let item = this.data[i];
      let index = newValues.findIndex(f => f === item.val);
      c.lineTo(i*this.yStep+this.yStep, index * this.xStep + this.padding + 7);
      c.strokeStyle = '#2BA2FC';
      c.stroke();
      c.beginPath();  
      c.arc(i*this.yStep+this.yStep, index * this.xStep + this.padding + 7, 1.5, 0, 2 * Math.PI);
      c.fillStyle = '#2BA2FC';
      c.fill();
    }
    /* draw line by x and y end*/

    /* hover start */

    const offset = this.canvas.nativeElement.getBoundingClientRect();

/*     this.canvas.nativeElement.onmousemove = function(event) {
      handleMouseMove(event)
    } */
    /* hover end */

    function handleMouseMove(e: MouseEvent) {
      e.preventDefault();
      e.stopPropagation();
      // console.log(e);

      let mouseX = e.clientX - offset.x;
      let mouseY = e.clientY - offset.y;

      console.log(mouseX, mouseY)
  }

  }

  

}
