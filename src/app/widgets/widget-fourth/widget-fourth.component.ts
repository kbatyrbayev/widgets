import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-fourth',
  template: `
    <div class="widget">
      <app-widget-header [name]="'About project'"></app-widget-header>
      <div class="widget__body widget__body--flex">
        <img class="icon" src="./assets/info-icon.svg" alt="info-icon">
        <div class="texts">
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
      width: 48px;
      height: 48px;
    }

    .texts {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 24px;
    }

    a {
      color: #F88863;
    }

  `]
})
export class WidgetFourthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
