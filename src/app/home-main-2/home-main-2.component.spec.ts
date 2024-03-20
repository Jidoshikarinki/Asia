import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMain2Component } from './home-main-2.component';

describe('HomeMain2Component', () => {
  let component: HomeMain2Component;
  let fixture: ComponentFixture<HomeMain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMain2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
