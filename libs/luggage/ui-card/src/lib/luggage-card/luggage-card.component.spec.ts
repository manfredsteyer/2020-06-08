import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggageCardComponent } from './luggage-card.component';

describe('LuggageCardComponent', () => {
  let component: LuggageCardComponent;
  let fixture: ComponentFixture<LuggageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuggageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuggageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
