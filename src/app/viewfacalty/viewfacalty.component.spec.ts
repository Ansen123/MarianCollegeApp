import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfacaltyComponent } from './viewfacalty.component';

describe('ViewfacaltyComponent', () => {
  let component: ViewfacaltyComponent;
  let fixture: ComponentFixture<ViewfacaltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfacaltyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewfacaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
