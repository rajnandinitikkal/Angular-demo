import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDemoComponent } from './first-demo.component';

describe('FirstDemoComponent', () => {
  let component: FirstDemoComponent;
  let fixture: ComponentFixture<FirstDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
