import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFirstComponent } from './widget-first.component';

describe('WidgetFirstComponent', () => {
  let component: WidgetFirstComponent;
  let fixture: ComponentFixture<WidgetFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
