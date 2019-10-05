import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GopyComponent } from './gopy.component';

describe('GopyComponent', () => {
  let component: GopyComponent;
  let fixture: ComponentFixture<GopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
