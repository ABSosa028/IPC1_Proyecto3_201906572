import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpubComponent } from './totalpub.component';

describe('TotalpubComponent', () => {
  let component: TotalpubComponent;
  let fixture: ComponentFixture<TotalpubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalpubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
