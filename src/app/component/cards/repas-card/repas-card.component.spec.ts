import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasCardComponent } from './repas-card.component';

describe('RepasCardComponent', () => {
  let component: RepasCardComponent;
  let fixture: ComponentFixture<RepasCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepasCardComponent]
    });
    fixture = TestBed.createComponent(RepasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
