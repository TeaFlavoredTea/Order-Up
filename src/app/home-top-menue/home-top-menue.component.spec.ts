import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopMenueComponent } from './home-top-menue.component';

describe('HomeTopMenueComponent', () => {
  let component: HomeTopMenueComponent;
  let fixture: ComponentFixture<HomeTopMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopMenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
