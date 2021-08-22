import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNscComponent } from './display-nsc.component';

describe('DisplayNscComponent', () => {
  let component: DisplayNscComponent;
  let fixture: ComponentFixture<DisplayNscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
