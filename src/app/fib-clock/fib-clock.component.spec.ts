import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibClockComponent } from './fib-clock.component';

describe('FibClockComponent', () => {
  let component: FibClockComponent;
  let fixture: ComponentFixture<FibClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
