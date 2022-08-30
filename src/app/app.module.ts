import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { GHC22Component } from './ghc22/ghc22.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebsitesComponent } from './websites/websites.component';
import { HttpClientModule } from '@angular/common/http';
import { CookingComponent } from './cooking/cooking.component';
import { EmbroideryComponent } from './embroidery/embroidery.component';
import { MusicMovieComponent } from './music-movie/music-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    ExperienceComponent,
    GHC22Component,
    ProjectsComponent,
    WebsitesComponent,
    CookingComponent,
    EmbroideryComponent,
    MusicMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
