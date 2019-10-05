import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienheComponent } from './lienhe.component';

describe('LienheComponent', () => {
  let component: LienheComponent;
  let fixture: ComponentFixture<LienheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
