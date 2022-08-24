import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GHC22Component } from './ghc22.component';

describe('GHC22Component', () => {
  let component: GHC22Component;
  let fixture: ComponentFixture<GHC22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GHC22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GHC22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
