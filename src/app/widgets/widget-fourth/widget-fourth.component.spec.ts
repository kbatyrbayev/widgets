import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFourthComponent } from './widget-fourth.component';

describe('WidgetFourthComponent', () => {
  let component: WidgetFourthComponent;
  let fixture: ComponentFixture<WidgetFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFourthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
