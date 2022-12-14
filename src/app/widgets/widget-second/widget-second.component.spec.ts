import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetSecondComponent } from './widget-second.component';

describe('WidgetSecondComponent', () => {
  let component: WidgetSecondComponent;
  let fixture: ComponentFixture<WidgetSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
