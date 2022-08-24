import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from './experience/experience.component';
import { GHC22Component } from './ghc22/ghc22.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'ghc22', component: GHC22Component},
    { path: 'projects', component: ProjectsComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
  
}