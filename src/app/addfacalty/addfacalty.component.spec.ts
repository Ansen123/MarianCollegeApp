import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfacaltyComponent } from './addfacalty.component';

describe('AddfacaltyComponent', () => {
  let component: AddfacaltyComponent;
  let fixture: ComponentFixture<AddfacaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfacaltyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfacaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
