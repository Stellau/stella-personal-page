import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicMovieComponent } from './music-movie.component';

describe('MusicMovieComponent', () => {
  let component: MusicMovieComponent;
  let fixture: ComponentFixture<MusicMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
