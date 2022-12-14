import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthRangeComponent } from './month-range.component';

describe('MonthRangeComponent', () => {
  let component: MonthRangeComponent;
  let fixture: ComponentFixture<MonthRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
