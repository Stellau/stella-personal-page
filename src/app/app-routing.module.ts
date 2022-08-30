import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CookingComponent } from './cooking/cooking.component';
import { EmbroideryComponent } from './embroidery/embroidery.component';
import { ExperienceComponent } from './experience/experience.component';
import { GHC22Component } from './ghc22/ghc22.component';
import { MusicMovieComponent } from './music-movie/music-movie.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebsitesComponent } from './websites/websites.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'ghc22', component: GHC22Component },
    { path: 'projects', component: ProjectsComponent },
    { path: 'websites', component: WebsitesComponent },
    { path: 'cooking', component: CookingComponent },
    { path: 'embroidery', component: EmbroideryComponent },
    { path: 'music-movie', component: MusicMovieComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
  
}