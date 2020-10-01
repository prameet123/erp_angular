import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpnesePolicieComponent } from './create-expnese-policie.component';

describe('CreateExpnesePolicieComponent', () => {
  let component: CreateExpnesePolicieComponent;
  let fixture: ComponentFixture<CreateExpnesePolicieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExpnesePolicieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpnesePolicieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
