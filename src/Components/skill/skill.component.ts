import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  @Input() skillName: string = 'HTML';
  @Input() skillLevel: number = 100;
  @Input() skillColor: string = 'bg-danger';
}
