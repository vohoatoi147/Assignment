import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoidapComponent } from './hoidap.component';

describe('HoidapComponent', () => {
  let component: HoidapComponent;
  let fixture: ComponentFixture<HoidapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoidapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoidapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
