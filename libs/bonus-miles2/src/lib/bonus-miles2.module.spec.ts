import { async, TestBed } from '@angular/core/testing';
import { BonusMiles2Module } from './bonus-miles2.module';

describe('BonusMiles2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BonusMiles2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BonusMiles2Module).toBeDefined();
  });
});
