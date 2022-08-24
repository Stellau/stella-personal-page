import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from './experience/experience.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
  
}