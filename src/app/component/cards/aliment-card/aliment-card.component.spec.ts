import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentCardComponent } from './aliment-card.component';

describe('AlimentCardComponent', () => {
  let component: AlimentCardComponent;
  let fixture: ComponentFixture<AlimentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimentCardComponent]
    });
    fixture = TestBed.createComponent(AlimentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
