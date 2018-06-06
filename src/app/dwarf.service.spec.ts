import { TestBed, inject } from '@angular/core/testing';

import { DwarfService } from './dwarf.service';

describe('DwarfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DwarfService]
    });
  });

  it('should be created', inject([DwarfService], (service: DwarfService) => {
    expect(service).toBeTruthy();
  }));
});
