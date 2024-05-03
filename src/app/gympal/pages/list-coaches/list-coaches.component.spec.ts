import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoachesComponent } from './list-coaches.component';

describe('ListCoachesComponent', () => {
  let component: ListCoachesComponent;
  let fixture: ComponentFixture<ListCoachesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCoachesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
