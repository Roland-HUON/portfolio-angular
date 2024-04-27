import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule.forRoot(routes)
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
