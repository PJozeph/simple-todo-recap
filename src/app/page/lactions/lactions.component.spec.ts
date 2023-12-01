import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LactionsComponent } from './lactions.component';

describe('LactionsComponent', () => {
  let component: LactionsComponent;
  let fixture: ComponentFixture<LactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LactionsComponent]
    });
    fixture = TestBed.createComponent(LactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
