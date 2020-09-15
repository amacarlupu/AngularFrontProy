import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazzarComponent } from './lazzar.component';

describe('LazzarComponent', () => {
  let component: LazzarComponent;
  let fixture: ComponentFixture<LazzarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazzarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazzarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
