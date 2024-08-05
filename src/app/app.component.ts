import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from '../Components/about-me/about-me.component';
import { HeroComponent } from '../Components/hero/hero.component';
import { SkillsSectionComponent } from '../Components/skills-section/skills-section.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { PorfolioSectionComponent } from '../Components/porfolio-section/porfolio-section.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutMeComponent,
    HeroComponent,
    SkillsSectionComponent,
    PorfolioSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignment4';
}
