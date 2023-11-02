import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArinComponent } from './arin.component';

describe('ArinComponent', () => {
  let component: ArinComponent;
  let fixture: ComponentFixture<ArinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArinComponent]
    });
    fixture = TestBed.createComponent(ArinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
