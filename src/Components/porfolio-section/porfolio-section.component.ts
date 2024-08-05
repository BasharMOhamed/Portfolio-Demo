import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
@Component({
  selector: 'app-porfolio-section',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './porfolio-section.component.html',
  styleUrl: './porfolio-section.component.css',
})
export class PorfolioSectionComponent {}
