import { async, TestBed } from '@angular/core/testing';
import { LuggageUiCardModule } from './luggage-ui-card.module';

describe('LuggageUiCardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LuggageUiCardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LuggageUiCardModule).toBeDefined();
  });
});
