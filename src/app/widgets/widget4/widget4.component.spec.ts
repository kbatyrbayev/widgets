import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget4Component } from './widget4.component';

describe('Widget4Component', () => {
  let component: Widget4Component;
  let fixture: ComponentFixture<Widget4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Widget4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Widget4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
