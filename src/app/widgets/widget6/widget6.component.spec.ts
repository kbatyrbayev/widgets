import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget6Component } from './widget6.component';

describe('Widget6Component', () => {
  let component: Widget6Component;
  let fixture: ComponentFixture<Widget6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Widget6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Widget6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
