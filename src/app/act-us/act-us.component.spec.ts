import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActUsComponent } from './act-us.component';

describe('ActUsComponent', () => {
  let component: ActUsComponent;
  let fixture: ComponentFixture<ActUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
