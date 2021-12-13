import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHeadderComponent } from './login-headder.component';

describe('LoginHeadderComponent', () => {
  let component: LoginHeadderComponent;
  let fixture: ComponentFixture<LoginHeadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHeadderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHeadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
