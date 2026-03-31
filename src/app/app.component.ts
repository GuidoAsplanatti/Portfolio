import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './features/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { CourseLaunchComponent } from './features/course-launch/course-launch.component';
import { VirtualToursComponent } from './features/virtual-tours/virtual-tours.component';
import { ThreeDGalleryComponent } from './features/three-d-gallery/three-d-gallery.component';
import { RenderGalleryComponent } from './features/render-gallery/render-gallery.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SpotifyPlayerComponent } from './features/spotify-player/spotify-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    CourseLaunchComponent,
    VirtualToursComponent,
    ThreeDGalleryComponent,
    RenderGalleryComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent,
    ProjectsComponent,
    SpotifyPlayerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // private translate = inject(TranslateService);

  constructor() {
    // this.translate.setDefaultLang('es');
    // this.translate.use('es');
  }
}
