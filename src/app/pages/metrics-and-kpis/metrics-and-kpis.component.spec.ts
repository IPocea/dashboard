import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsAndKpisComponent } from './metrics-and-kpis.component';

describe('MetricsAndKpisComponent', () => {
  let component: MetricsAndKpisComponent;
  let fixture: ComponentFixture<MetricsAndKpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsAndKpisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricsAndKpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
