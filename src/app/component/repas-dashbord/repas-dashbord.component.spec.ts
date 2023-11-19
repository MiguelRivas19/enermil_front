import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasDashbordComponent } from './repas-dashbord.component';

describe('RepasDashbordComponent', () => {
  let component: RepasDashbordComponent;
  let fixture: ComponentFixture<RepasDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepasDashbordComponent]
    });
    fixture = TestBed.createComponent(RepasDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
