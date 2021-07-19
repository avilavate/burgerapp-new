import { TestBed } from '@angular/core/testing';

import { AddIngredientServiceService } from './add-ingredient-service.service';

describe('AddIngredientServiceService', () => {
  let service: AddIngredientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddIngredientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
