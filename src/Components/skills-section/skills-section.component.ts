import { Component } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';
@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
})
export class SkillsSectionComponent {}
