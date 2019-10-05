import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoimatkhauComponent } from './doimatkhau.component';

describe('DoimatkhauComponent', () => {
  let component: DoimatkhauComponent;
  let fixture: ComponentFixture<DoimatkhauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoimatkhauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoimatkhauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
