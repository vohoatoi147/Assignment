import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThitracnghiemComponent } from './thitracnghiem.component';

describe('ThitracnghiemComponent', () => {
  let component: ThitracnghiemComponent;
  let fixture: ComponentFixture<ThitracnghiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThitracnghiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThitracnghiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
