import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, debounceTime} from "rxjs";

@Component({
  selector: 'app-widget-fourth',
  template: `
    <div class="widget" #widget>
      <app-widget-header [name]="'About project'"></app-widget-header>
      <div class="widget__body widget__body--flex">
        <img class="icon" src="./assets/info-icon.svg" alt="info-icon">
        <div class="texts" [style.font-size]="fontSize">
          <p>
            The real estate market is an integral part of the economy of any country. <br>
            Therefore, I decided to create a project to show real estate market analytics in my country, Kazakhstan.
          </p>
          <p>
            All analytical data is taken from the website <a target="_blank" href="https://krisha.kz/">krisha.kz</a>.
          </p>
          <p>
            The project was created solely to show my skills in front-end development, not to sale
          </p>
          <p>
            Used technologies: Angular2+, scss, svg, api, rxjs, grid, pixso.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import "../../shared/custom-styles/widget";

    .icon {
      width: 3vw;
      height: 3vw;
    }

    .texts {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    a {
      color: #F88863;
    }

  `]
})
export class WidgetFourthComponent implements OnInit, AfterViewInit {

  widgetParams = new BehaviorSubject<{ width: number, height: number }>({width: 0, height: 0});
  fontSize = '1.5vw';
  @ViewChild('widget', {static: true}) widget!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.widgetParams
      .pipe(
        debounceTime(500)
      )
      .subscribe(res => {
        if (res.width > res.height) {
          this.fontSize = '1.5vw';
        } else {
          this.fontSize = '1.5vh';
        }
      });
  }

  ngAfterViewInit() {
    this.checkWidgetSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWidgetSize();
  }

  checkWidgetSize() {
    this.widgetParams.next({
      width: this.widget.nativeElement.offsetWidth,
      height: this.widget.nativeElement.offsetHeight
    });
  }

}
