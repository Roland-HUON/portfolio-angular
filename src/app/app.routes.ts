import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes : Routes = [
    {path : 'home', component: HomeComponent},
    {path : 'about', component : AboutComponent},
    {path : 'skills', component : SkillsComponent},
    {path : 'projects', component : ProjectsComponent},
    {path : 'contact', component :ContactComponent},
    {path : '', redirectTo: 'home', pathMatch: 'full'},
    {path : '**', component : PageNotFoundComponent}
];