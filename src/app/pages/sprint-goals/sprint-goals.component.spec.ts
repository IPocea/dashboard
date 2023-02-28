import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintGoalsComponent } from './sprint-goals.component';

describe('SprintGoalsComponent', () => {
  let component: SprintGoalsComponent;
  let fixture: ComponentFixture<SprintGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
