import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponent } from './ng.component';

describe('NgComponent', () => {
  let component: NgComponent;
  let fixture: ComponentFixture<NgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
