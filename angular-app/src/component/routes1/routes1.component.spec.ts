import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routes1Component } from './routes1.component';

describe('Routes1Component', () => {
  let component: Routes1Component;
  let fixture: ComponentFixture<Routes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routes1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Routes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
