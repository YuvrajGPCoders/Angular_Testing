import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrabhComponent } from './prabh.component';

describe('PrabhComponent', () => {
  let component: PrabhComponent;
  let fixture: ComponentFixture<PrabhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrabhComponent]
    });
    fixture = TestBed.createComponent(PrabhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
