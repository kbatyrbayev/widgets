import {Component} from '@angular/core';

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
            Used technologies: Angular2+, Scss, SVG, API, RxJS, Grid, Pixso.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @import "../../shared/custom-styles/widget";

    .icon {
      width: 3vh;
      height: 3vh;
    }

    .texts {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      p {
        line-height: 1.2rem;
      }
    }

    a {
      color: #F88863;
    }
  `]
})
export class WidgetFourthComponent {
}
