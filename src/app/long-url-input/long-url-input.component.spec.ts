import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongUrlInputComponent } from './long-url-input.component';

describe('LongUrlInputComponent', () => {
  let component: LongUrlInputComponent;
  let fixture: ComponentFixture<LongUrlInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongUrlInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongUrlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
