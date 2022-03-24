import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalusComponent } from './totalus.component';

describe('TotalusComponent', () => {
  let component: TotalusComponent;
  let fixture: ComponentFixture<TotalusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
