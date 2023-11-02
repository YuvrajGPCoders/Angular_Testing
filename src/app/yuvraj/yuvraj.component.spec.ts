import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuvrajComponent } from './yuvraj.component';

describe('YuvrajComponent', () => {
  let component: YuvrajComponent;
  let fixture: ComponentFixture<YuvrajComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YuvrajComponent]
    });
    fixture = TestBed.createComponent(YuvrajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
