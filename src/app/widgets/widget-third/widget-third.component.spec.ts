import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetThirdComponent } from './widget-third.component';

describe('WidgetThirdComponent', () => {
  let component: WidgetThirdComponent;
  let fixture: ComponentFixture<WidgetThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetThirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
