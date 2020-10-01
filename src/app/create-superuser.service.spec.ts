import { TestBed } from '@angular/core/testing';

import { CreateSuperuserService } from './create-superuser.service';

describe('CreateSuperuserService', () => {
  let service: CreateSuperuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSuperuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
